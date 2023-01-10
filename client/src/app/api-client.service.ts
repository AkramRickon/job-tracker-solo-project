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
  createApplication(application: any) {
    return this.http.post<Application>(this.rootUrl, application);
  }
}
