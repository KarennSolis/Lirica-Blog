const sequelize = require('../conexion-bd');
const path = require('path')
const fs = require('fs')

//Insertar contenido a la BD//
const postContent = async function (req, res) {
  const { titulo, contenido} = req.body;
  const imagen = req.file

  console.log(titulo, contenido, imagen)
  console.log(imagen)
 
  const imagenPath = path.join(
    __dirname,
    "../public/imagenes",
    imagen.originalname
  );
  await fs.promises.rename(imagen.path, imagenPath);
  const imagenUrl = `/imagenes/${imagen.originalname}` || "";
  try {
    // Crear post
    await sequelize.query('INSERT INTO posts (titulo, contenido, imagen) VALUES (?, ?, ?)', {
      replacements: [titulo ?? "", contenido ?? "", imagenUrl ?? ""],
      type: sequelize.QueryTypes.INSERT
    });
    
    console.log('Post creado');
    res.status(200).send({ result: true, message: "Post creado con éxito" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ result: false, message: 'Error en el servidor' });
  }
};


//Obtener contenido desde la BD//
const getContent = async function (req, res) {
  try {
    const posts = await sequelize.query('SELECT * FROM posts', {
      type: sequelize.QueryTypes.SELECT
    });

    const postsconImagenUrl = posts.map((post) =>
					post.imagen
						? {
								...post,
								imagen: `${req.protocol}://${req.get("host")}/${post.imagen}`,
						  }
						: {
								...post,
								imagen: null,
						  }
				);

    // console.log(posts);
    res.status(200).send({ result: true, data: postsconImagenUrl });
  } catch (error) {
    console.log(error);
    res.status(500).send({ result: false, message: 'Error en el servidor' });
  }
};

//Borrar posts//
const deletePostById = async function (req, res) {
  const postId = req.params.id; // Obtén el ID del post desde los parámetros de la URL

  try {
    const post = await sequelize.query('SELECT * FROM posts WHERE id_post = ?', {
      replacements: [postId],
      type: sequelize.QueryTypes.SELECT
    });

    console.log(post)

    const result = await sequelize.query('DELETE FROM posts WHERE id_post = ?', {
      replacements: [postId],
      type: sequelize.QueryTypes.DELETE
    });
    
    // Elimino la imagen
    const imagePath = path.join(__dirname, "../public", post[0].imagen);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(err);
      }
    });


    if (result && result[0] && result[0].affectedRows === 0) {
      // Si no se encuentra el post con el ID especificado, devuelve un error 404
      res.status(404).send({ result: false, message: 'Post no encontrado' });
    } else {
      res.status(200).send({ result: true, message: 'Post eliminado con éxito' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ result: false, message: 'Error en el servidor' });
  }
};


//Editar datos//
// const updatePostById = async function (req, res) {
//   const postId = req.params.id;
//   const { titulo, contenido, imagen } = req.body;
//   if (!titulo || !contenido || !imagen || !postId) {
//     return res.status(400).send({ result: false, message: 'Faltan datos para la actualización del post' });
//   }
//   try {
//     const result = await sequelize.query('UPDATE posts SET titulo = ?, contenido = ?, imagen = ? WHERE id_post = ?', {
//       replacements: [titulo, contenido, imagen, postId],
//       type: sequelize.QueryTypes.UPDATE
//     });
//     if (result && result[0] && result[0].affectedRows === 0) {
//       res.status(404).send({ result: false, message: 'Post no encontrado' });
//     } else {
//       res.status(200).send({ result: true, message: 'Post actualizado con éxito' });
//     }
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ result: false, message: 'Error en el servidor' });
//   }
// };

const updatePostById = async function (req, res) {
  const postId = req.params.id;
  const { titulo, contenido} = req.body;
  if (!titulo || !contenido || !postId) {
    return res.status(400).send({ result: false, message: 'Faltan datos para la actualización del post' });
  }
  try {
    const result = await sequelize.query('UPDATE posts SET titulo = ?, contenido = ? WHERE id_post = ?', {
      replacements: [titulo, contenido, postId],
      type: sequelize.QueryTypes.UPDATE
    });
    if (result && result[0] && result[0].affectedRows === 0) {
      res.status(404).send({ result: false, message: 'Post no encontrado' });
    } else {
      res.status(200).send({ result: true, message: 'Post actualizado con éxito' });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ result: false, message: 'Error en el servidor' });
  }
};
//Obtener post_id//
const getPostById = async function (req, res) {
  const postId = req.params.id; // Obtén el ID del post desde los parámetros de la URL

  try {
    const post = await sequelize.query('SELECT * FROM posts WHERE id_post = ?', {
      replacements: [postId],
      type: sequelize.QueryTypes.SELECT
    });
    const postWithImagen = post[0];
    postWithImagen.imagen= `${req.protocol}://${req.get("host")}/${postWithImagen.imagen}`
    if (post.length === 0) {
      // Si no se encuentra el post con el ID especificado, devuelve un error 404
      res.status(404).send({ result: false, message: 'Post no encontrado' });
    } else {
      res.status(200).send({ result: true, data: postWithImagen});
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ result: false, message: 'Error en el servidor' });
  }
};

module.exports = {
  postContent,
  getContent,
  deletePostById,
  updatePostById,
  getPostById
};



