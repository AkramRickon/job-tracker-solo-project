import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:3000/auth"
  constructor(private httpClient: HttpClient) { }


  proceedRegister(user: any) {
    return this.httpClient.post<User>(`${this.authUrl}/signup`, user);
  }

  proceedLogin(loginData: any) {
    return this.httpClient.post(`${this.authUrl}/signin`, loginData)
  }

}
