import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }

  getUsers():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/admin/getAllUsers`);
  }

  getUser(userId: number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/admin/getUserById/${userId}`)
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/admin/updateUser/${userId}`, userData);
  }

  activateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/admin/activate/${userId}`, userData);
  }

  deactivateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/admin/deactivate/${userId}`, userData);
  }
}
