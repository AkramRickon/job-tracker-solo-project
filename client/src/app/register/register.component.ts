import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService,private Router:Router) { }
  ngOnInit(): void {
  }

  handleRegister() {
    if (this.registerForm.valid) {
      this.authService.proceedRegister(this.registerForm.value).subscribe(response=>console.log(response));
      this.registerForm.reset();
      this.Router.navigate(['/login']);
    }
  }
}
