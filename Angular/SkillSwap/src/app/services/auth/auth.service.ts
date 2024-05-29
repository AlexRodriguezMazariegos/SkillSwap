import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user!: usuario | null;
  private _token!: string | null;
  private _role!: string | null;

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public get user(): usuario {
    if (this._user != null) {
      return this._user;
    } else if (this._user == null) {
      const userStr = sessionStorage.getItem('user');
      if (userStr != null) {
        this._user = JSON.parse(userStr) as usuario;
      } else {
        this._user = new usuario();
      }
    }
    return this._user;
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token')!;
      return this._token;
    }
    return '';
  }

  login(user: usuario): Observable<any> {
    const url: string = `${this.baseUrl}/login`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, user, { headers: httpHeaders });
  }

  saveUser(accessToken: string): void {
    let payload = this.getDataToken(accessToken);
    this._user = new usuario();
    this._user.email = payload.email;
    sessionStorage.setItem('user', JSON.stringify(this._user));
  }
  saveToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  saveRole(accessToken: string): void {
    let payload = this.getDataToken(accessToken);
    this._role = payload.authorities;
    sessionStorage.setItem('role', JSON.stringify(this._role));
  }

  getDataToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.getDataToken(this.token);

    if (payload != null && payload.username && payload.username.length > 0) {
      return true;
    }
    return false;
  }

  logout(): void {
    this._token = null;
    this._user = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
}
