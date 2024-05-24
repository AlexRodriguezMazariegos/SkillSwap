import { articulo } from './articulo';
import { usuario } from './usuario';

export interface valoracion {
  id: number;
  puntuacion: number;
  usuario: usuario;
  articulo: articulo;
}
