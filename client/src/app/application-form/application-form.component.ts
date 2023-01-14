import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Application } from '../interfaces/Application';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  // statusList = [
  //   { name: "pending", value: 'pending' },
  //   { name: "processing", value: 'processing' },
  //   { name: "rejected", value: 'rejected' }
  // ]
  user: String | null = '';
  isSubmitted?: Boolean = false;
  
  applicationForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    jobNature: new FormControl('', Validators.required),
    employmentType: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    interviewDate: new FormControl(''),
    status: new FormControl('', Validators.required),
    jobLink: new FormControl('', Validators.required)
  })

  constructor(private formBuilder: FormBuilder,
    private apiClient: ApiClientService,
    private Router: Router,
    private authService: AuthService) { }
  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  handleSubmit() {

    // this.user = this.authService.getUser();
    console.log(this.user);
    // console.log(this.applicationForm.value);
    console.log({ ...this.applicationForm.value, user: this.user });

    if (this.user) {
      this.isSubmitted = true;
      this.apiClient.createApplication({ ...this.applicationForm.value, user: this.user }).subscribe();
    }
    this.applicationForm.reset();
    setTimeout(() => {
      this.Router.navigate(['home']);
    }, 2000)
  }
}
