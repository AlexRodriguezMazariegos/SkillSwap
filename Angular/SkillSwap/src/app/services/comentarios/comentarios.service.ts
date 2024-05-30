import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comentario } from '../../model/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  baseUrl = 'http://localhost:8080/api/v1/comentarios';
  constructor(private http: HttpClient) { }

  postComentario(nuevoComentario: comentario) {
    return this.http.post(this.baseUrl, nuevoComentario)
  }
}
