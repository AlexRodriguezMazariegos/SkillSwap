import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { articulo } from '../../model/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  baseUrl = 'http://localhost:8080/api/v1/articulo';

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/activos`);
  }

  getArticuloCualquieraById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getArticuloById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/activos/${id}`);
  }

  getArticuloByUserId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuario/${id}`);
  }

  postArticulo(newArticulo: articulo):Observable<any>{
    return this.http.post(this.baseUrl, newArticulo)
  }

  activarDesactivar(id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, {});
  }

  deleteArticulo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`)
  }

  updateArticulo(id: number, articulo: articulo): Observable<articulo> {
    return this.http.put<articulo>(`${this.baseUrl}/${id}`, articulo);
  }
}
