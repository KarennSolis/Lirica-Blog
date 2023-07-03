import { useState } from "react";

export function DeleteButton({ id }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/lirica/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Este post ha sido eliminado");
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(false);
    handleDelete();
  };

  return (
    <>
      {showConfirmation ? (
        <div className="delete-confirmation">
          <p>¿Estás seguro de que deseas eliminar este post?</p>
          <button className="btn btn-primary me-2" onClick={handleConfirmDelete}>Eliminar</button>
          <button className="btn btn-danger" onClick={() => setShowConfirmation(false)}>Cancelar</button>
        </div>
      ) : (
        <button
          className="btn btn-danger bi bi-trash"
          onClick={() => setShowConfirmation(true)}
        ></button>
      )}
    </>
  );
}
