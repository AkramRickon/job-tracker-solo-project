import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientService } from '../../services/api-client.service';
import { Application } from '../../interfaces/Application';
import { AuthService } from '../../services/auth.service';
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent implements OnInit {

  applicationDetails!: Application;
  applicationId!: String;
  isSubmitted?: Boolean = false;
  user: String | null = '';
  currentDate: Date = new Date();

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
    jobLink: ['', Validators.required],
  })

  constructor(private apiClient: ApiClientService,
    private ActivatedRoute: ActivatedRoute,
    private Router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }
  ngOnInit(): void {

    this.getApplicationDetails();
    this.user = this.authService.getUser();
  }

  getApplicationDetails() {
    this.ActivatedRoute.params.forEach(params => this.applicationId = params['id']);

    this.apiClient.getApplicationById(this.applicationId).subscribe(response => {
      console.log(response);
      this.applicationForm.controls['companyName'].setValue(response.companyName);
      this.applicationForm.controls['position'].setValue(response.position);
      this.applicationForm.controls['location'].setValue(response.location);
      this.applicationForm.controls['jobNature'].setValue(response.jobNature);
      this.applicationForm.controls['employmentType'].setValue(response.employmentType);
      this.applicationForm.controls['details'].setValue(response.details);
      this.applicationForm.controls['jobLink'].setValue(response.jobLink);
      this.applicationForm.controls['status'].setValue(response.status);
      if(response.interviewDate){
        this.applicationForm.controls['interviewDate'].setValue(formatDate((response.interviewDate),'yyyy-MM-dd','en'));
      }
      // this.applicationForm.controls['interviewDate'].setValue(formatDate((response.interviewDate),'yyyy-MM-dd','en') || new Date ().toLocaleString());
      this.applicationForm.controls['salary'].setValue(response.salary.toString());
    })
  }
  handleUpdate() {
    this.isSubmitted = true;
    console.log(this.applicationForm.setValue);
    this.apiClient.updateApplication({ ...this.applicationForm.value, user: this.user }, this.applicationId).subscribe(res => console.log(res));
    this.applicationForm.reset();
    setTimeout(() => {
      this.Router.navigate(['home']);
    }, 2000)
  }

  get applicationFormControl() {
    return this.applicationForm.controls;
  }
}
