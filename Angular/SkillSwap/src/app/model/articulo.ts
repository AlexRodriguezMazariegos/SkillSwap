import { skill } from './skill';
import { usuario } from './usuario';

export interface articulo {
  description: any;
  title: any;
  id: number;
  usuario: usuario;
  contenido: string;
  descripcion: string;
  titulo: string;
  fechaPublicacion: Date;
}
