import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'http://localhost:8080/api/v1/usuario';

  constructor(private http: HttpClient) { }

  getusuarios():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  getUsuarioById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  postUsuario(usuario:usuario):Observable<any>{
    return this.http.post(this.baseUrl,usuario)
  }

  getUsuarioByEmail(email:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/email/${email}`)
  }
  
}