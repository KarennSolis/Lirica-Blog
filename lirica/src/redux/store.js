import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";



export const store = configureStore({
    reducer: {
        article: blogReducer,
    },

});




store.subscribe(() => {
    console.log(store.getState());
});