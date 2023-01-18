import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from '../interfaces/Application';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = "http://localhost:3000/application"
  token = this.authService.getToken();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getApplications(): Observable<Application[]> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    };
    return this.http.get<Application[]>(this.rootUrl, httpOptions);
  }

  getUserApplication(email: any): Observable<Application[]> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    };
    return this.http.post<Application[]>(`${this.rootUrl}/user`, { email }, httpOptions);
  }


  getApplicationById(id: String): Observable<Application> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    };

    return this.http.get<Application>(`${this.rootUrl}/${id}`, httpOptions);
  }

  createApplication(application: any): Observable<Application> {
    console.log(application);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    };
    return this.http.post<Application>(this.rootUrl, application, httpOptions);
  }

  deleteApplication(id: String): Observable<Application> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    };
    return this.http.delete<Application>(`${this.rootUrl}/${id}`, httpOptions);
  }

  updateApplication(application: any, id: String): Observable<Application> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${this.token}`
      }
    };
    return this.http.put<Application>(`${this.rootUrl}/${id}`, application, httpOptions);
  }
}
