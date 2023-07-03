import React from "react";
import "../feed/feed.css";
import { useState } from "react";
import { useEffect } from "react";
import { addArticle } from "../../redux/blogSlice";
import { PostSection } from "./postSection";

export function FeedBlog() {
  const [dataPosts, setDataPosts] = useState([]);
  const [newArticle, setNewArticle] = useState(false);
  //Onclick en añadir entrada, muestra botones//
  const [mostrarInputs, setMostrarInputs] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("http://localhost:3001/lirica", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setDataPosts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [newArticle]);

  const handleMostrarInputs = () => {
    setMostrarInputs(true);
  };

  //regresar al estado inicial//
  const handleCancelar = () => {
    setMostrarInputs(false);
    setTitulo("");
    setContenido("");
    setImagen({});
  };

  //Enviar datos a bd//
  const handleGuardar = async () => {
    console.log(imagen);
  if (titulo && contenido && imagen) {
    try {
        const formData = new FormData();
        formData.append("imagen", imagen);
        formData.append("titulo", titulo);
        formData.append("contenido", contenido);

        const response = await fetch("http://localhost:3001/lirica", {
          method: "POST",
          body: formData,
        });

        const responseData = await response.json();
        console.log(responseData);
        console.log(response);
        if (response.ok){
          // Los datos se guardaron correctamente//
          console.log("Datos guardados correctamente");
          alert("Su post ha sido publicado exitosamente");
          setTitulo("");
          setContenido("");
          setImagen({});
          setMostrarInputs(false);
          setNewArticle(true);

        } else {
          alert('no se ha podido cargar el post')
        }
      } catch (error) {
        console.log("Error en la conexión:", error);
      }
    } else {
      alert("Todos los campos son requeridos");
    }
  };

  return (
    <div>
      <header className="container-fluid bg-dark d-flex justify-content-center">
        <h1 className="text-white mb-0 p-2 font-monospace bi bi-music-note">
          Lírica
        </h1>
      </header>
      <nav className="navbar bg-body-tertiary">
        <form className="container-fluid d-flex justify-content-center">
          <button
            className="btn btn-outline-secondary me-2 bi bi-music-note-list"
            type="button"
            onClick={handleMostrarInputs}
          >
            Añadir entrada
          </button>
        </form>
      </nav>

      {mostrarInputs && (
        <div className="container mt-3">
          <div className="input-group mb-3">
            <span className="input-group-text">Título</span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Contenido</span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el contenido"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
              required
            />
          </div>
          <div className="input-group mb-3">
        
            <input type="file" name="imagen" onChange={(e) => setImagen(e.target.files[0])} />
          </div>

          <button
            className="btn btn-outline-dark mb-2 me-2"
            onClick={() => {
              handleGuardar();
            }}
          >
            Guardar
          </button>
          <button
            className="btn btn-outline-danger mb-2"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
        </div>
      )}
      <main className="fondo">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <h3 className="d-flex justify-content-center text-white bg-dark font-monospace">
                Mejores portadas
              </h3>
              <div
                id="carouselExampleInterval2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div
                  id="carouselExampleInterval"
                  className="carousel slide container-fluid d-flex justify-content-center"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="3000"
                    >
                      <img
                        src="/imagenesFijas/the-dark.jpg"
                        className="d-block w-100"
                        alt="image1"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <img
                        src="/imagenesFijas/queen.jpg"
                        className="d-block w-100"
                        alt="image2"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <img
                        src="/imagenesFijas/Rock_Covers-ilustracion-oldskull-15.jpg"
                        className="d-block w-100"
                        alt="image3"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            {/* FEED DE POSTS */}
            <PostSection dataPosts={dataPosts} />
            <div className="col-3">
              <h3 className="d-flex justify-content-center text-white bg-dark font-monospace">
                Mejores bandas
              </h3>
              <div
                id="carouselExampleInterval2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div
                  id="carouselExampleInterval"
                  className="carousel slide container-fluid d-flex justify-content-center"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="3000"
                    >
                      <img
                        src="/imagenesFijas/acdc.jpg"
                        className="d-block w-100"
                        alt="image1"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <img
                        src="/imagenesFijas/theCure.jpg"
                        className="d-block w-100"
                        alt="image2"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <img
                        src="/imagenesFijas/radiohead.jpg"
                        className="d-block w-100"
                        alt="image2"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <img
                        src="/imagenesFijas/nirvana.jpg"
                        className="d-block w-100"
                        alt="image3"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <img
                        src="/imagenesFijas/rolling.jpg"
                        className="d-block w-100"
                        alt="image3"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer mt-auto py-3 bg-dark text-white text-center">
        <div className="container text-center">
          <p className="mb-0">
            Lírica Copyright &copy;
            <span id="currentYear">{new Date().getFullYear()}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
