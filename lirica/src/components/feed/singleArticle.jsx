import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { DeleteButton } from "./deleteButton";

export function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const { id } = useParams();
  useEffect(() => {
    const fetchPostId = async () => {
      try {
        const response = await fetch(`http://localhost:3001/lirica/post/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setArticle(data.data);
        setEditedTitle(data.data.titulo);
        setEditedContent(data.data.contenido);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPostId();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3001/lirica/post/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: editedTitle,
          contenido: editedContent,
        }),
      });

      if (response.ok) {
        setIsEditing(false);
        alert("Sus cambios han sido guardados con exito, será redirigido a Inicio");
        window.location.href = "http://localhost:8080/lirica";
      } else {
        console.log("Error al guardar los cambios");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(article.titulo);
    setEditedContent(article.contenido);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <main className="fondo">
    <header className="container-fluid bg-dark d-flex justify-content-center">
        <h1 className="text-white mb-0 p-2 font-monospace bi bi-music-note">Lírica</h1>
    </header>
    <section className="container justify-content-center col-6">
      <article className=" mt-5" key={article.id_post}>
        <div className="card mb-3 tamImg">
          <img src={article.imagen} className="card-img-top tamImg" alt="..." />
          <div className="card-body">
            {isEditing ? (
              <input
                type="text"
                className="form-control mb-2"
                value={editedTitle}
                onChange={handleTitleChange}/>
            ) : (
              <h1 className="card-title">{article.titulo}</h1>
            )}
            <small className="text-body-secondary">Fecha de publicación: {article.fecha?.length > 10 ? `${article.fecha.slice(0, 10)}` : article.fecha}</small>
            {isEditing ? (
               <textarea
                className="form-control mb-3"
                rows={4}
                value={editedContent}
                onChange={handleContentChange}/>
            ) : (
              <p className="card-text">{article.contenido}</p>
            )}
            <p className="card-text">
              {isEditing ? (
                <>
                  <button onClick={handleSave} className="btn btn-primary me-2 bi bi-check-circle"></button>
                  <button onClick={handleCancel} className="btn btn-danger me-2 bi bi-x-circle"></button>
                </>
              ) : (
                <button onClick={handleEdit} className="btn btn-primary me-2 bi bi-pencil"></button>
              )}
              <DeleteButton id={article.id_post} />
            </p>
          </div>
        </div>
      </article>
    </section>
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
        <div className="container text-center">
          <p className="mb-0">Lírica Copyright &copy;
            <span id="currentYear">{new Date().getFullYear()}</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
