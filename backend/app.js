const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const fs = require('fs')
const cors = require('cors');
const sequelize = require('./conexion-bd');
const { postContent, getContent, deletePostById, getPostById, updatePostById } = require('./routes/post');
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('MIDDLEWARE DE MULTER')
        cb(null, path.join(__dirname, "public/imagenes"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
// middleware multer
const upload = multer({ storage });

app.route("/lirica")
    .post(upload.single("imagen"), postContent)
    .get(getContent)


app.route('/lirica/post/:id')
    .get(getPostById)
    .patch(updatePostById)
    .delete(deletePostById)

app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
});

