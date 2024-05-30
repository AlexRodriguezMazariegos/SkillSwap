import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill } from '../../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/v1/skill';

  getSkills(): Observable<skill[]> {
    return this.http.get<skill[]>(this.baseUrl);
  }

}
