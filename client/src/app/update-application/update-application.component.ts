import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Application } from '../application';

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent implements OnInit {

  applicationDetails!: Application;
  applicationId!: String;



  isSubmitted?: Boolean = false;
  applicationForm = this.formBuilder.group({
    companyName: this.applicationDetails?.companyName,
    location:this.applicationDetails.location,
    position:this.applicationDetails.position,
    jobNature: this.applicationDetails.jobNature,
    employmentType: this.applicationDetails.employmentType,
    details: this.applicationDetails.details,
    salary: this.applicationDetails.salary,
    interviewDate: this.applicationDetails.interviewDate,
    status: this.applicationDetails.status,
    jobLink: this.applicationDetails.jobLink
  })



  constructor(private apiClient: ApiClientService, private ActivatedRoute: ActivatedRoute, private Router: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.getApplicationDetails();
  }

  getApplicationDetails() {
    this.ActivatedRoute.params.forEach(params => this.applicationId = params['id']);
    this.apiClient.getApplicationById(this.applicationId).subscribe(response => {
      this.applicationDetails = response;
    })
  }
  handleSubmit() {
    this.isSubmitted = true;
    console.log(this.applicationForm.value);
    // this.apiClient.updateApplication(this.applicationForm.value,this.applicationId).subscribe();
    this.applicationForm.reset();
    setTimeout(() => {
      this.Router.navigate(['home']);
    }, 4000)
  }
}
