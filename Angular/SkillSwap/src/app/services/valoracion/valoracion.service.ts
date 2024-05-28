import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { valoracion } from '../../model/valoracion';

@Injectable({
  providedIn: 'root',
})
export class ValoracionService {
  baseUrl = 'http://localhost:8080/api/v1/valoracion';

  constructor(private http: HttpClient) {}

  getValoraciones(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getValoracionByIdById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getValoracionesByIdByUsuario(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getValoracionesByIdByArticulo(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/valoraciones?articulo=${id}`);
  }

  saveOrUpdateValoracion(valoracion: valoracion): Observable<valoracion> {
    return this.http.post<valoracion>(`${this.baseUrl}/saveOrUpdate`, valoracion);
  }

  obtenerValoracion(articuloId: number, usuarioId: number): Observable<valoracion | null> {
    return this.http.get<valoracion | null>(`${this.baseUrl}/obtenerValoracion?articuloId=${articuloId}&usuarioId=${usuarioId}`);
  }
}
