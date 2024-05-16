import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  
  baseUrl = 'http://localhost:8080/api/v1/articulo';

  constructor(private http: HttpClient) { }

  getArticulos():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  getArticuloById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
  

}
