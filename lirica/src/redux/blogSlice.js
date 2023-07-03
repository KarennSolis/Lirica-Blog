import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    titulo: "", 
    contenido: "", 
    imagen: "",
    fecha: ""
};

export const blogSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        addArticle: (state, action) => {
            const { titulo, contenido, imagen, fecha } = action.payload;
            state.titulo = titulo;
            state.contenido = contenido;
            state.imagen = imagen;
            state.fecha = fecha;
        },
        changeFields: (state, action) => {
            state.titulo = action.payload;
            state.contenido = action.payload;
            state.imagen = action.payload;
            state.fecha = action.payload;
        },

},
});

export const { addArticle, changeFields } = blogSlice.actions;
export default blogSlice.reducer; 