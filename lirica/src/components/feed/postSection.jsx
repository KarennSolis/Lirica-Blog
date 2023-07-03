import { Link } from "react-router-dom";
import { DeleteButton } from "./deleteButton";

export function PostSection({ dataPosts }) {
  const sortedPosts = [...dataPosts].sort((a, b) => b.timestamp - a.timestamp).reverse();
  

  return (
    <section className='container justify-content-center col-6'>
      {sortedPosts.map((article) => (
        <article className=" mt-5" key={article.id_post}>
          <div className="card mb-3">
            <img src={article.imagen} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
              <h2 className="card-title">{article.titulo}</h2>
              <small className="text-body-secondary">Fecha de publicación: {article.fecha.length > 10 ? `${article.fecha.slice(0, 10)}` : article.fecha}</small>
              <p className="card-text">
                {article.contenido.length > 50 ? `${article.contenido.slice(0, 50)}...` : article.contenido}
              </p>
              <Link className="me-2" to={`/lirica/${article.id_post}`}>Ver más</Link>
              <DeleteButton id={article.id_post} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
