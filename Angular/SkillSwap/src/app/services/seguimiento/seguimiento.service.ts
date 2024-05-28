import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { seguimiento } from '../../model/seguimiento';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/v1/seguimiento';

  getSeguidos(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/seguidores/${id}`)
  }

  getSeguidores(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/seguidos/${id}`)
  }

  postSeguimiento(seguimiento: seguimiento):Observable<any> {
    return this.http.post<any>(this.baseUrl, seguimiento)
  }

  getSeguimiento(idSeguidor:number, idSeguido:number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${idSeguidor}/${idSeguido}`)
  }

  deleteSeguimiento(idSeguidor:number, idSeguido:number):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${idSeguidor}/${idSeguido}`)
  }

}
