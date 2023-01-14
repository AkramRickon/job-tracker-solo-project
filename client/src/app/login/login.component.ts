import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  responseData: any;
  isSubmitted: boolean = false;

  constructor(
    private authService: AuthService,
    private Router: Router) {
      localStorage.clear();
     }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.loginForm.valid) {
      this.authService.proceedLogin(this.loginForm.value).subscribe(response => {
        if (response !== null) {
          this.responseData = response;
          // console.log(response);
          localStorage.setItem('token', this.responseData.access_token);
          localStorage.setItem('user',this.responseData.email);
  
          this.isSubmitted = true;
          setTimeout(() => {
            this.Router.navigate(['/home']);
          },2000)
        }
      });
      this.loginForm.reset();
    }
  }

}
