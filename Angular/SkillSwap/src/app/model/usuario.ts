import { skill } from "./skill";

export interface usuario{
    id_usuario:number,
    nombre:string,
    apellido:string,
    email:string,
    contrasena:string,
    urlGitHub:string,
    puestoEmpresa:string,
    skills:Array<skill>
}