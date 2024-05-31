import { skill } from './skill';

export class usuario {
  id!: number;
  nombre!: string;
  apellido!: string;
  email!: string;
  contrasena!: string;
  urlGitHub!: string;
  puestoEmpresa!: string;
  skills!: Array<skill>;
  fotoDePerfil!: string;
}

export class login {
  email!:string;
  contrasena!:string
}