import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl='http://localhost:8081/api/user-service';
  constructor(private http:HttpClient) { }

  getUsers():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllUsers`);
  }

  getUser(userId: number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getUserById/${userId}`)
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, userData);
  }

  activateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/activate/${userId}`, userData);
  }

  deactivateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/deactivate/${userId}`, userData);
  }
}
