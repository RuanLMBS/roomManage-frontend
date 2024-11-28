import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceRequestService {
  private apiUrl = 'http://localhost:9000/api/space-request';
  constructor(private http:HttpClient) { }

   
  requestSpace(spaceRequestDTO: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  });
    return this.http.post(`${this.apiUrl}/createSpaceRequest`, spaceRequestDTO,{headers});
  }
  
  getRequests(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllSpaceRequests`)
  }

  

  acceptRequest(requestId:number, token:any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  });
    return this.http.put(`${this.apiUrl}/${requestId}/accept`, {},{headers})  }

  rejectRequest(requestId:number, token:any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  });
    return this.http.put(`${this.apiUrl}/${requestId}/decline`, {},{headers})
  }
}
