import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comentario } from '../../model/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  baseUrl = 'http://localhost:8080/api/v1/comentarios';
  constructor(private http: HttpClient) { }

  postComentario(nuevoComentario: comentario, idUsuario: number, idArticulo: number) {
    return this.http.post(`${this.baseUrl}/${idArticulo}/newComentario/${idUsuario}`, nuevoComentario)
  }

  deleteComentario(idComentario: number) {
    return this.http.delete(`${this.baseUrl}/${idComentario}`)
  }
}
