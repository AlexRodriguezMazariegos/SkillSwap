import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/v1/seguimiento';

  getSeguidos(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/seguidos/${id}`)
  }

  getSeguidores(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/seguidores/${id}`)
  }
}
