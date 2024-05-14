import { articulo } from './articulo';
import { usuario } from './usuario';

export interface comentario {
  id_comentario: number;
  id_usuario: usuario;
  id_articulo: articulo;
  fecha: Date;
  texto: string;
}
