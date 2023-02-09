import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiClientService } from '../../services/api-client.service';
import { Application } from '../../interfaces/Application';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  user: String | null = '';
  isSubmitted?: Boolean = false;

  applicationForm = this.formBuilder.group({
    companyName: ['', Validators.required],
    location: ['', Validators.required],
    position: ['', Validators.required],
    jobNature: ['', Validators.required],
    employmentType: ['', Validators.required],
    details: ['', Validators.required],
    salary: ['', Validators.required],
    interviewDate: '',
    status: ['', Validators.required],
    jobLink: ['', Validators.required]
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

  get applicationFormControl() {
    return this.applicationForm.controls;
  }
}
