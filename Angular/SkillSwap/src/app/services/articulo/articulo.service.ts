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
    return this.http.get<any>(this.baseUrl);
  }

  getArticuloById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getArticuloByUserId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuario/${id}`);
  }

  postArticulo(newArticulo: articulo):Observable<any>{
    return this.http.post(this.baseUrl, newArticulo)
  }
}
