import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { articulo } from '../../model/articulo';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private headers!: HttpHeaders;
  baseUrl = 'http://localhost:8080/api/v1/articulo';

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
  getArticulos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/activos`,{ headers: this.headers });
  }

  getArticuloCualquieraById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`,{ headers: this.headers });
  }

  getArticuloById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/activos/${id}`);
  }

  getArticuloByUserId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuario/${id}`,{ headers: this.headers });
  }

  postArticulo(newArticulo: articulo):Observable<any>{
    return this.http.post(this.baseUrl, newArticulo,{ headers: this.headers })
  }

  activarDesactivar(id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, {});
  }

  deleteArticulo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`,{ headers: this.headers })
  }
    updateArticulo(id: number, articulo: articulo): Observable<articulo> {
    return this.http.put<articulo>(`${this.baseUrl}/${id}`, articulo,{ headers: this.headers } );
  }

}
