import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { valoracion } from '../../model/valoracion';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValoracionService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private headers!: HttpHeaders;
  baseUrl = 'http://localhost:8080/api/v1/valoracion';

  constructor(private http: HttpClient, private authservice: AuthService) { 
    
    this.headers = this.addAuthorizationHeader();
  
}

private addAuthorizationHeader(): HttpHeaders {
  let token = this.authservice.token;
  console.log(token)
  if (token != null) {
    return this.httpHeaders.append('Authorization', 'Bearer ' + token);
  }
  return this.httpHeaders;
}

  getValoraciones():Observable<any>{
    return this.http.get<any>(this.baseUrl,{ headers: this.headers})
  }

  getValoracionByIdById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`,{ headers: this.headers})
  }

  getValoracionesByIdByUsuario(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`,{ headers: this.headers})
  }

  getValoracionesByIdByArticulo(id:number):Observable<any>{
    console.log(this.httpHeaders)
    return this.http.get<any[]>(`${this.baseUrl}/valoraciones?articulo=${id}`,{ headers: this.headers});
  }

  postValoracion(valoracion: valoracion):Observable<any>{
    return this.http.post(this.baseUrl,valoracion,{ headers: this.headers})
  saveOrUpdateValoracion(valoracion: valoracion): Observable<valoracion> {
    return this.http.post<valoracion>(`${this.baseUrl}/saveOrUpdate`, valoracion);
  }

  editarValoracionPorId(id:number, valoracion: valoracion):Observable<any>{
    return this.http.put(this.baseUrl,valoracion,{ headers: this.headers})
  obtenerValoracion(articuloId: number, usuarioId: number): Observable<valoracion | null> {
    return this.http.get<valoracion | null>(`${this.baseUrl}/obtenerValoracion?articuloId=${articuloId}&usuarioId=${usuarioId}`);
  }
}
