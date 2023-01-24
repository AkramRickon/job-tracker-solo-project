import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  })

  isSubmitted?: boolean = false;
  userError: string = '';
  isError: boolean = false;
  isPassError: boolean = false;

  constructor(private authService: AuthService, private Router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  handleRegister() {
    if (this.registerForm.valid) {
      this.isError = false;

      if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
        this.isPassError = false;

        this.authService.proceedRegister(this.registerForm.value).subscribe({
          next: response => {
            this.isError = false;
            this.isSubmitted = true;
            this.registerForm.reset();
            console.log(response);
            setTimeout(() => {
              this.Router.navigate(['/login']);
            }, 2000)
          },
          error: error => {
            this.userError = error.error.message;
            this.isError = true;
          }
        })
      }

      else {

        this.isPassError = true;
        this.userError = 'Password did not match';
        this.registerForm.reset();

      }
    }
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
}
