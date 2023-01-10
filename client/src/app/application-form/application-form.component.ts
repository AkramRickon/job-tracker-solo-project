import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Application } from '../application';

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


  applicationForm = this.formBuilder.group({
    companyName: "",
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
    console.log(this.applicationForm);
    this.apiClient.createApplication(this.applicationForm.value).subscribe();
    this.applicationForm.reset();
    this.Router.navigate(['home']);
  }
}
