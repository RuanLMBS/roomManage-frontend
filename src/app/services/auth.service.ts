import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';
  constructor(private http:HttpClient) { }

  login(username: string, password: string):Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });
    const body = { username, password };
    return this.http.post(this.apiUrl, body, {headers}).pipe(
      tap((response:any)=>{
        this.saveToken(response.token)
        const decodedToken: any = jwtDecode(response.token);
        console.log(`Decoded token: ${decodedToken.getUserRole}`)
        localStorage.setItem('role', decodedToken.role); 
        localStorage.setItem('sub', decodedToken.sub);
        localStorage.setItem('active', decodedToken.active)
      })
    );
  } 
  
  saveToken(token: string) {
    localStorage.setItem('authToken',token);
  }
  

  getToken(): string|null {
    return localStorage.getItem('authToken');
  }

  getUserRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserName(): string|null {
    return localStorage.getItem('sub');
  }

  getActive(): string|null {
    return localStorage.getItem('active');
  }
 
  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('sub')
    localStorage.removeItem('authToken');
  }
  
}
