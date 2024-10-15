import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private apiUrl = 'http://localhost:8080'
  constructor(private http:HttpClient) { }

  createSpace(spaceData: any) {
    return this.http.post(`${this.apiUrl}/spaces/admin/create`, spaceData)
  }

  getSpaces(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/spaces/all`)
  }

  setAvaibility(spaceId:number, spaceData:any):Observable<any> {
    return this.http.put(`${this.apiUrl}/spaces/admin/available/${spaceId}`,spaceData);  
  }

  setActivity(spaceId:number, spaceData:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/spaces/admin/active/${spaceId}`,spaceData);  
  }

  deleteSpace(spaceId: number):Observable<any> {
    return this.http.delete(`${this.apiUrl}/spaces/admin/delete/${spaceId}`)
  }

  getSpaceById(spaceId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/spaces/admin/getSpaceById/${spaceId}`)
  }
  
  updateSpace(spaceId:number, spaceData: any) {
    return this.http.put(`${this.apiUrl}/spaces/admin/update/${spaceId}`,spaceData)
  }

  requestSpace(spaceRequestDTO: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  });
    return this.http.post(`${this.apiUrl}/spacerequests/teacher/createSpaceRequest`, spaceRequestDTO,{headers});
  }

  getRequests(): Observable<any> {
    return this.http.get(`${this.apiUrl}/spacerequests/manager/getAllSpaceRequests`)
  }

  getFinishedRequests(): Observable<any> {
    return this.http.get(`${this.apiUrl}/spacerequests/manager/getAllAprovaFlows`)
  }

  acceptRequest(requestId:number, token:any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  });
    return this.http.post(`${this.apiUrl}/spacerequests/manager/approve/${requestId}`, {},{headers})  }

  rejectRequest(requestId:number, token:any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  });
    return this.http.post(`${this.apiUrl}/spacerequests/manager/reject/${requestId}`, {},{headers})
  }

  
}
