import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:8081/api/user-service/register'
  constructor(private http:HttpClient) { }

  register(userData:any): Observable<any> {
    return this.http.post(`${this.url}`, userData)
  }

}
