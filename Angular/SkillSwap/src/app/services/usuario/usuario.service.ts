import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login, usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrl = 'http://localhost:8080/api/v1/usuario';

  constructor(private http: HttpClient) {}

  getusuarios(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getUsuarioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  postUsuario(usuario: usuario): Observable<any> {
    console.log('POST:', usuario);
    return this.http.post(this.baseUrl, usuario);
  }

  putUsuario(id: number, usuario: usuario): Observable<usuario> {
    console.log('PUT:', usuario);
    return this.http.put<usuario>(`${this.baseUrl}/${id}`, usuario);
  }

  getUsuarioByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }

  login(usuario: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/login`, usuario, { headers });
  }

  actualizarSkillsUsuario(
    idUsuario: number,
    idSkills: number[]
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idUsuario}/skills`, idSkills);
  }

}
