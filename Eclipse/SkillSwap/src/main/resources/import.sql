-- Usuarios
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Juan', 'juan@eviden.com', 'Perez', 'Ingeniero', '1111', 'https://github.com/juan');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Maria', 'maria@eviden.com', 'Lopez', 'Diseñador', '2222', 'https://github.com/maria');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Carlos', 'carlos@eviden.com', 'Gomez', 'Analista', '3333', 'https://github.com/carlos');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Laura', 'laura@eviden.com', 'Martinez', 'Ingeniera', '4444', 'https://github.com/laura');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Pedro', 'pedro@eviden.com', 'Gonzalez', 'Programador', '5555', 'https://github.com/pedro');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Sofia', 'sofia@eviden.com', 'Hernandez', 'Analista', '6666', 'https://github.com/sofia');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Ana', 'ana@eviden.com', 'Rodriguez', 'Desarrollador', '7777', 'https://github.com/ana');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Javier', 'javier@eviden.com', 'Fernandez', 'Diseñador', '8888', 'https://github.com/javier');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Elena', 'elena@eviden.com', 'Perez', 'Analista', '9999', 'https://github.com/elena');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Diego', 'diego@eviden.com', 'Garcia', 'Ingeniera', '1010', 'https://github.com/diego');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Carmen', 'carmen@eviden.com', 'Ruiz', 'Programador', '2020', 'https://github.com/carmen');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Manuel', 'manuel@eviden.com', 'Sanchez', 'Analista', '3030', 'https://github.com/manuel');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Lucia', 'lucia@eviden.com', 'Torres', 'Desarrollador', '4040', 'https://github.com/lucia');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Pablo', 'pablo@eviden.com', 'Diaz', 'Diseñador', '5050', 'https://github.com/pablo');
INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `apellido`, `puesto_empresa`, `contrasena`, `url_git_hub`) VALUES (NULL, 'Eva', 'eva@eviden.com', 'Gutierrez', 'Analista', '6060', 'https://github.com/eva');


--Articulos

-- Usuario 1
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '1', 'Contenido del artículo para el usuario 1');
-- Usuario 2
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '2', 'Contenido del artículo para el usuario 2');
-- Usuario 3
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '3', 'Contenido del artículo para el usuario 3');
-- Usuario 4
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '4', 'Contenido del artículo para el usuario 4');
-- Usuario 5
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '5', 'Contenido del artículo para el usuario 5');
-- Usuario 6
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '6', 'Contenido del artículo para el usuario 6');
-- Usuario 7
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '7', 'Contenido del artículo para el usuario 7');
-- Usuario 8
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '8', 'Contenido del artículo para el usuario 8');
-- Usuario 9
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '9', 'Contenido del artículo para el usuario 9');
-- Usuario 10
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '10', 'Contenido del artículo para el usuario 10');
-- Usuario 11
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '11', 'Contenido del artículo para el usuario 11');
-- Usuario 12
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '12', 'Contenido del artículo para el usuario 12');
-- Usuario 13
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '13', 'Contenido del artículo para el usuario 13');
-- Usuario 14
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '14', 'Contenido del artículo para el usuario 14');
-- Usuario 15
INSERT INTO `articulo` (`id_articulo`, `id_usuario`, `contenido`) VALUES (NULL, '15', 'Contenido del artículo para el usuario 15');


--Chats

-- Chat entre Usuario 1 y Usuario 2
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '1', '2');
-- Chat entre Usuario 3 y Usuario 4
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '3', '4');
-- Chat entre Usuario 5 y Usuario 6
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '5', '6');
-- Chat entre Usuario 7 y Usuario 8
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '7', '8');
-- Chat entre Usuario 9 y Usuario 10
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '9', '10');
-- Chat entre Usuario 11 y Usuario 12
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '11', '12');
-- Chat entre Usuario 13 y Usuario 14
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '13', '14');
-- Chat entre Usuario 15 y Usuario 1
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '15', '1');
-- Chat entre Usuario 2 y Usuario 3
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '2', '3');
-- Chat entre Usuario 4 y Usuario 5
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '4', '5');
-- Chat entre Usuario 6 y Usuario 7
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '6', '7');
-- Chat entre Usuario 8 y Usuario 9
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '8', '9');
-- Chat entre Usuario 10 y Usuario 11
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '10', '11');
-- Chat entre Usuario 12 y Usuario 13
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '12', '13');
-- Chat entre Usuario 14 y Usuario 15
INSERT INTO `chat` (`id_chat`, `id_usuario1`, `id_usuario2`) VALUES (NULL, '14', '15');


-- Comentarios

-- Comentario en el artículo 1 por el usuario 1
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '1', NULL, '1', 'Contenido del comentario 1');
-- Comentario en el artículo 2 por el usuario 2
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '2', NULL, '2', 'Contenido del comentario 2');
-- Comentario en el artículo 3 por el usuario 3
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '3', NULL, '3', 'Contenido del comentario 3');
-- Comentario en el artículo 1 por el usuario 4
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '1', NULL, '4', 'Contenido del comentario 4');
-- Comentario en el artículo 2 por el usuario 5
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '2', NULL, '5', 'Contenido del comentario 5');
-- Comentario en el artículo 3 por el usuario 6
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '3', NULL, '6', 'Contenido del comentario 6');
-- Comentario en el artículo 4 por el usuario 7
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '4', NULL, '7', 'Contenido del comentario 7');
-- Comentario en el artículo 5 por el usuario 8
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '5', NULL, '8', 'Contenido del comentario 8');
-- Comentario en el artículo 6 por el usuario 9
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '6', NULL, '9', 'Contenido del comentario 9');
-- Comentario en el artículo 7 por el usuario 10
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '7', NULL, '10', 'Contenido del comentario 10');
-- Comentario en el artículo 8 por el usuario 11
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '8', NULL, '11', 'Contenido del comentario 11');
-- Comentario en el artículo 9 por el usuario 12
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '9', NULL, '12', 'Contenido del comentario 12');
-- Comentario en el artículo 10 por el usuario 13
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '10', NULL, '13', 'Contenido del comentario 13');
-- Comentario en el artículo 11 por el usuario 14
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '11', NULL, '14', 'Contenido del comentario 14');
-- Comentario en el artículo 12 por el usuario 15
INSERT INTO `comentario` (`fecha`, `id_articulo`, `id_comentario`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '12', NULL, '15', 'Contenido del comentario 15');



-- Mensajes

-- Mensaje en el chat 1 por el usuario 1
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '1', NULL, '1', 'Ejemplo de mensaje 1');
-- Mensaje en el chat 2 por el usuario 2
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '2', NULL, '2', 'Ejemplo de mensaje 2');
-- Mensaje en el chat 3 por el usuario 3
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '3', NULL, '3', 'Ejemplo de mensaje 3');
-- Mensaje en el chat 4 por el usuario 4
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '4', NULL, '4', 'Ejemplo de mensaje 4');
-- Mensaje en el chat 5 por el usuario 5
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '5', NULL, '5', 'Ejemplo de mensaje 5');
-- Mensaje en el chat 6 por el usuario 6
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '6', NULL, '6', 'Ejemplo de mensaje 6');
-- Mensaje en el chat 7 por el usuario 7
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '7', NULL, '7', 'Ejemplo de mensaje 7');
-- Mensaje en el chat 8 por el usuario 8
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '8', NULL, '8', 'Ejemplo de mensaje 8');
-- Mensaje en el chat 9 por el usuario 9
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '9', NULL, '9', 'Ejemplo de mensaje 9');
-- Mensaje en el chat 10 por el usuario 10
INSERT INTO `mensaje` (`fecha`, `id_chat`, `id_mensaje`, `id_usuario`, `texto`) VALUES (CURRENT_TIME(), '10', NULL, '10', 'Ejemplo de mensaje 10');


--Seguimiento
-- Usuario 3 sigue al usuario 1
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('1', '3');
-- Usuario 2 sigue al usuario 4
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('4', '2');
-- Usuario 5 sigue al usuario 1
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('1', '5');
-- Usuario 3 sigue al usuario 6
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('6', '3');
-- Usuario 7 sigue al usuario 2
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('2', '7');
-- Usuario 4 sigue al usuario 6
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('6', '4');
-- Usuario 8 sigue al usuario 5
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('5', '8');
-- Usuario 9 sigue al usuario 7
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('7', '9');
-- Usuario 10 sigue al usuario 1
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('1', '10');
-- Usuario 6 sigue al usuario 2
INSERT INTO `seguimiento` (`id_usuario_seguido`, `id_usuario_seguidor`) VALUES ('2', '6');


--Skills
INSERT INTO `skill` (`id_skill`, `nombre`) VALUES (NULL, 'Lenguaje de programacion Java');
INSERT INTO `skill` (`id_skill`, `nombre`) VALUES (NULL, 'Lenguaje de programacion Python');
INSERT INTO `skill` (`id_skill`, `nombre`) VALUES (NULL, 'Lenguaje de programacion JavaScript');
INSERT INTO `skill` (`id_skill`, `nombre`) VALUES (NULL, 'Lenguaje de programacion C++');
INSERT INTO `skill` (`id_skill`, `nombre`) VALUES (NULL, 'Lenguaje de programacion Ruby');
INSERT INTO `skill` (`id_skill`, `nombre`) VALUES (NULL, 'Lenguaje de programacion Go');
INSERT INTO `skill` (`id_skill`, `nombre`) VALUES (NULL, 'Lenguaje de programacion Swift');



--Usuario_skill
-- Usuario 1 tiene habilidad en Java
INSERT INTO `usuario_skills` (`skills_id_skill`, `usuarios_id_usuario`) VALUES ('1', '1');
-- Usuario 2 tiene habilidad en Python
INSERT INTO `usuario_skills` (`skills_id_skill`, `usuarios_id_usuario`) VALUES ('2', '2');
-- Usuario 3 tiene habilidad en JavaScript
INSERT INTO `usuario_skills` (`skills_id_skill`, `usuarios_id_usuario`) VALUES ('3', '3');
-- Usuario 4 tiene habilidad en C++
INSERT INTO `usuario_skills` (`skills_id_skill`, `usuarios_id_usuario`) VALUES ('4', '4');
-- Usuario 5 tiene habilidad en Ruby
INSERT INTO `usuario_skills` (`skills_id_skill`, `usuarios_id_usuario`) VALUES ('5', '5');
-- Usuario 6 tiene habilidad en Go
INSERT INTO `usuario_skills` (`skills_id_skill`, `usuarios_id_usuario`) VALUES ('6', '6');
-- Usuario 7 tiene habilidad en Swift
INSERT INTO `usuario_skills` (`skills_id_skill`, `usuarios_id_usuario`) VALUES ('7', '7');
















