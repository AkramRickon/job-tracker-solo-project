import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  responseData: any;
  isSubmitted: boolean = false;
  userError: String = '';
  isError: Boolean = false;

  constructor(
    private authService: AuthService,
    private Router: Router,
    private fb: FormBuilder) {
    localStorage.clear();
  }

  ngOnInit(): void {
  }

  handleLogin() {

    if (this.loginForm.valid) {
      this.authService.proceedLogin(this.loginForm.value).subscribe({
        next: response => {
          this.responseData = response;
          console.log(response);
          localStorage.setItem('token', this.responseData.access_token);
          localStorage.setItem('user', this.responseData.email);

          this.isError = false;
          this.isSubmitted = true;
          this.loginForm.reset();

          setTimeout(() => {
            this.Router.navigate(['home']);
          }, 2000)
        },
        error: error => {
          this.userError = error.error.message;
          this.isError = true;
        }
      })
    }



    //     this.authService.proceedLogin(this.loginForm.value).subscribe(response => {
    //       if (response !== null) {
    //         this.responseData = response;
    //         // console.log(response);
    //         localStorage.setItem('token', this.responseData.access_token);
    //         localStorage.setItem('user',this.responseData.email);

    //         this.isSubmitted = true;
    //         setTimeout(() => {
    //           this.Router.navigate(['/home']);
    //         },2000)
    //       }
    //     });
    //     this.loginForm.reset();
    //   }
    // }

    // get loginFormControl() {
    //   return this.loginForm.controls;
    // }
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

}
