import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private apiUrl = 'http://localhost:9000/api/space-service'
  constructor(private http:HttpClient) { }

  createSpace(spaceData: any) {
    return this.http.post(`${this.apiUrl}/createSpace`, spaceData)
  }

  getSpaces(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllSpaces`)
  }

  /*setAvaibility(spaceId:number, spaceData:any):Observable<any> {
    return this.http.put(`${this.apiUrl}/spaces/admin/available/${spaceId}`,spaceData);  
  }

  setActivity(spaceId:number, spaceData:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/spaces/admin/active/${spaceId}`,spaceData);  
  }*/

  deleteSpace(spaceId: number):Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteSpace/${spaceId}`)
  }

  getSpaceById(spaceId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/existsById/${spaceId}`)
  }
  
  updateSpace(spaceId:number, spaceData: any) {
    return this.http.put(`${this.apiUrl}/updateSpace/${spaceId}`,spaceData)
  }

 

  
}
