-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 20:07:05
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog_lirica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id_post` int(11) NOT NULL,
  `titulo` varchar(5000) NOT NULL,
  `contenido` varchar(5000) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `imagen` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id_post`, `titulo`, `contenido`, `fecha`, `imagen`) VALUES
(48, 'Under pressure surgió de un accidente!', 'Este tema de 1981 fue el segundo de la banda en alcanzar el primer puesto, después del éxito de Bohemian rhapsody en 1975. La agrupación había invitado a David Bowie al estudio para grabar los coros de la canción Cool cat, pero, según confesó Brian May en una entrevista, la línea del bajo surgió de un accidente y lapso mental del bajista John Deacon, pues olvidó lo que tenía que tocar. Deacon empezó a improvisar y Bowie intervino para darle el toque final, el resultado fue Under pressure', '2023-07-03 17:28:10', '/imagenes/pressreu.jpg'),
(49, 'Radio Gaga inspiró a una de las más grandes estrellas pop de la actualidad', 'Roger Taylor escribió en 1984 Radio Gaga, una forma de defender a la música después de haber escuchado a su hijo criticando una canción que no le había gustado en la radio. Tiempo después, con el auge de la televisión, el tema se convirtió en una defensa al formato radial. Lo curioso es que Stefani Germanotta, mejor conocida como Lady Gaga, adoptó su nombre artístico como un tributo a su banda favorita, Queen, y a su cantante favorito, Freddie Mercury.', '2023-07-03 17:31:09', '/imagenes/lady-gaga.jpg'),
(50, 'Espontánea canción exitosa de Guns N\' Roses.', 'La icónica canción \"Sweet Child o\' Mine\" de Guns N\' Roses (1987) surgió de forma espontánea durante un ensayo de la banda. El guitarrista Slash comenzó a tocar el famoso riff, y el vocalista Axl Rose improvisó la letra en ese momento.', '2023-07-03 17:33:02', '/imagenes/Sweet-Child-OMine1.jpg'),
(51, '¿Popularidad sinónimo de éxito?', 'La canción \"Creep\" de Radiohead (1992) inicialmente no tuvo éxito y fue considerada un fracaso. Sin embargo, ganó popularidad de forma gradual y se convirtió en uno de los mayores éxitos de la banda, ayudando a establecer su carrera.', '2023-07-03 17:35:03', '/imagenes/creepjpg.jpg'),
(52, 'The Cure y su álbum caótico', 'El álbum \"Disintegration\" (1989) de The Cure fue creado en un ambiente de tensión y conflictos internos. A pesar de esto, se convirtió en uno de los álbumes más aclamados de la banda y contiene éxitos como \"Lovesong\" y \"Pictures of You\".', '2023-07-03 17:37:02', '/imagenes/The-cure-Disi.jpg'),
(53, 'Los teloneros más famosos', 'La famosa banda británica Radiohead alcanzó la fama en los años 90 con su álbum \"OK Computer\" (1997). Sin embargo, antes de su éxito, fueron teloneros de la banda estadounidense R.E.M. en su gira europea de 1995.', '2023-07-03 17:39:18', '/imagenes/radioh.jpg'),
(54, 'Pioneros del britpop', 'Oasis: Originarios del Reino Unido, Oasis lideró el movimiento britpop en los 90 con álbumes como \"Definitely Maybe\" (1994) y \"(What\'s the Story) Morning Glory?\" (1995), que incluye el éxito \"Wonderwall\".', '2023-07-03 17:41:33', '/imagenes/oas.jpg'),
(55, 'Claroscuro', '\"Every Breath You Take\" de The Police (1983) es una icónica canción de amor con una melodía pegadiza, aunque su letra tiene un tono más oscuro.', '2023-07-03 17:43:57', '/imagenes/police.jpg'),
(56, 'Detonación sexual musical', '\"Like a Virgin\" de Madonna (1984) catapultó su carrera y se convirtió en un símbolo de la liberación sexual en la música pop.', '2023-07-03 17:45:47', '/imagenes/like-virgin-madonna.jpg'),
(57, 'Letra críptica', '\"Hotel California\" de Eagles (1976) es una de las canciones más enigmáticas de la década. Ha generado numerosas teorías e interpretaciones debido a su letra críptica y su atmósfera misteriosa.', '2023-07-03 17:48:02', '/imagenes/hotel-california-eagles-081121-lt.jpg'),
(58, 'De lo mejor de los 70s', '\"Stairway to Heaven\" de Led Zeppelin (1971): Esta canción épica y atmosférica es ampliamente considerada como una de las mejores de todos los tiempos. Su composición magistral, la guitarra virtuosa y la voz inconfundible de Robert Plant la convierten en una obra maestra del rock.', '2023-07-03 17:50:13', '/imagenes/led-1.jpg'),
(59, 'El nacimiento de un fenómeno cultural', '\"Thriller\" de Michael Jackson (1982): Esta canción no solo definió la carrera de Michael Jackson, sino que también revolucionó la industria de la música. Con su fusión de pop, R&B y elementos del género de terror, \"Thriller\" se convirtió en un fenómeno cultural y estableció nuevos estándares en la producción de videoclips.', '2023-07-03 17:52:16', '/imagenes/01MJ.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_post`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
