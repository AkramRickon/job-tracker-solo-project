import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "https://job-tracker-solo-project-3g13.vercel.app"
  constructor(private httpClient: HttpClient) { }

  loggedIn: boolean = this.isLoggedIn();

  proceedRegister(user: any) {
    return this.httpClient.post<User>(`${this.authUrl}/signup`, user);
  }

  proceedLogin(loginData: any) {
    return this.httpClient.post(`${this.authUrl}/signin`, loginData, { observe: 'response' });
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUser() {
    return localStorage.getItem('user');
  }

  // getResponse(){
  //   return localStorage.getItem('response');
  // }

}
