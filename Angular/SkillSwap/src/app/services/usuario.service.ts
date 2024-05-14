import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'http://localhost:8080/api/v1/usuario';

  constructor(private http: HttpClient) { }

  getusuarios():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }
  
}
