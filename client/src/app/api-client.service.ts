import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from './application';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = "http://localhost:3000/application"

  constructor(private http: HttpClient) { }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.rootUrl);
  }

  getApplicationById(id: String): Observable<Application> {
    return this.http.get<Application>(`${this.rootUrl}/${id}`);
  }

  createApplication(application: any): Observable<Application> {
    return this.http.post<Application>(this.rootUrl, application);
  }

  deleteApplication(id: String) : Observable<Application> {
    return this.http.delete<Application>(`${this.rootUrl}/${id}`);
  }

  updateApplication (application:any ,id:String) : Observable<Application> {
    return this.http.put<Application>(`${this.rootUrl}/${id}`, application);
  }
}
