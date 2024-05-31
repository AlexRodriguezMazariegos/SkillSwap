import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comentario } from '../../model/comentario';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private headers!: HttpHeaders;
  baseUrl = 'http://localhost:8080/api/v1/comentario';

  constructor(private http: HttpClient, private authservice: AuthService) { 
    
    this.headers = this.addAuthorizationHeader();
  
}

private addAuthorizationHeader(): HttpHeaders {
  let token = this.authservice.token;
  if (token != null) {
    return this.httpHeaders.append('Authorization', 'Bearer ' + token);
  }
  return this.httpHeaders;
}

  postComentario(nuevoComentario: comentario, idUsuario: number, idArticulo: number) {
    return this.http.post(`${this.baseUrl}/${idArticulo}/newComentario/${idUsuario}`, nuevoComentario,{ headers: this.headers})
  }

  deleteComentario(idComentario: number) {
    return this.http.delete(`${this.baseUrl}/${idComentario}`,{ headers: this.headers})
  }
}
