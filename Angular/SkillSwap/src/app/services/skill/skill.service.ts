import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill } from '../../model/skill';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private headers!: HttpHeaders;
  baseUrl = 'http://localhost:8080/api/v1/skill';

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

  getSkills(): Observable<skill[]> {
    console.log(this.headers)
    return this.http.get<skill[]>(this.baseUrl, { headers: this.headers });
  }
}
