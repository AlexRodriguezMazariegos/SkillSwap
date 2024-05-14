import { usuario } from './usuario';

export interface articulo {
  id_articulo: number;
  usuario: usuario;
  contenido: string;
  descripcion: string;
  titulo: string;
  fechaPublicacion: Date;
}
