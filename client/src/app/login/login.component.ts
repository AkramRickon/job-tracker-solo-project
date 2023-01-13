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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  handleLogin() {
    if(this.loginForm.valid){
      this.authService.proceedLogin(this.loginForm.value).subscribe(response=>console.log(response));
      this.loginForm.reset();
    }
  }

}
