import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Application } from '../application';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  applicationDetails!: Application
  applicationId!: String
  faPaperPlane = faPaperPlane
  faArrowLeftLong = faArrowLeftLong

  constructor(private apiClient: ApiClientService, private ActivatedRoute: ActivatedRoute ,private Router:Router) { }
  ngOnInit(): void {
    this.getApplicationDetails()
  }
  getApplicationDetails() {
    this.ActivatedRoute.params.forEach(params => this.applicationId = params['id']);
    this.apiClient.getApplicationById(this.applicationId).subscribe(response => {
      this.applicationDetails = response;
    })
  }
  handleGoBack(){
    this.Router.navigate(['home']);
  }

}
