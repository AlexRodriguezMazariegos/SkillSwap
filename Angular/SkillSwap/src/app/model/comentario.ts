import { articulo } from './articulo';
import { usuario } from './usuario';

export interface comentario {
  id: number;
  usuario: usuario;
  articulo: articulo;
  fecha: Date;
  texto: string;
}
