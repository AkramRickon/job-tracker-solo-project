import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Application } from '../interfaces/Application';

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

  isSubmitted?: Boolean = false;
  applicationForm = this.formBuilder.group({
    companyName: ['', Validators.minLength(10)],
    location: "",
    position: "",
    jobNature: "",
    employmentType: "",
    details: "",
    salary: "",
    interviewDate: "",
    status: "",
    jobLink: ""
  })

  constructor(private formBuilder: FormBuilder, private apiClient: ApiClientService, private Router: Router) { }
  ngOnInit(): void {
  }

  handleSubmit() {
    this.isSubmitted = true;
    console.log(this.applicationForm.value);
    this.apiClient.createApplication(this.applicationForm.value).subscribe();
    this.applicationForm.reset();
    setTimeout(() => {
      this.Router.navigate(['home']);
    },2000)
  }
}
