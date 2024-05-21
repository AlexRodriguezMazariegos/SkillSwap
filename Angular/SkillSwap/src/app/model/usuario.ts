import { skill } from './skill';

export interface usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  contrasena: string;
  urlGitHub: string;
  puestoEmpresa: string;
  skills: Array<skill>;
  fotoDePerfil: string;
}

export interface login {
  email:string,
  contrasena:string
}