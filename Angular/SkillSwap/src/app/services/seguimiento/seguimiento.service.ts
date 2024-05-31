import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { seguimiento } from '../../model/seguimiento';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private headers!: HttpHeaders;
  baseUrl = 'http://localhost:8080/api/v1/seguimiento';

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



  getSeguidos(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/seguidores/${id}`, { headers: this.headers })
  }

  getSeguidores(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/seguidos/${id}`, { headers: this.headers })
  }

  postSeguimiento(seguimiento: seguimiento):Observable<any> {
    return this.http.post<any>(this.baseUrl, seguimiento, { headers: this.headers })
  }

  getSeguimiento(idSeguidor:number, idSeguido:number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${idSeguidor}/${idSeguido}`,{ headers: this.headers })
  }

  deleteSeguimiento(idSeguidor:number, idSeguido:number):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${idSeguidor}/${idSeguido}`,{ headers: this.headers })
  }

}
