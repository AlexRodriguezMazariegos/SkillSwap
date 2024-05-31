import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login, usuario } from '../../model/usuario';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private headers!: HttpHeaders;
  baseUrl = 'http://localhost:8080/api/v1/usuario';

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


  getusuarios():Observable<any>{
    let token = this.authservice.token;
    return this.http.get<any>(this.baseUrl,{ headers: this.headers } )
  }

  getUsuarioById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers: this.headers })
  }

  postUsuario(usuario:usuario):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,usuario)
  }

  getUsuarioByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }

  saveUser(email:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/GetUsuario/${email}`,{ headers: this.headers })
  }

  actualizarSkillsUsuario(
    idUsuario: number,
    idSkills: number[]
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/${idUsuario}/skills`, idSkills);
  }

  
}