import { comentario } from './comentario';
import { usuario } from './usuario';

export interface articulo {
  id: number;
  usuario: usuario;
  contenido: string;
  descripcion: string;
  titulo: string;
  fechaPublicacion: Date;
  comentarios: Array<comentario>
}
