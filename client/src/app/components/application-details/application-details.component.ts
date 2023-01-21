import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientService } from '../../services/api-client.service';
import { Application } from '../../interfaces/Application';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  applicationDetails?: Application
  applicationId!: String
  faPaperPlane = faPaperPlane
  faArrowLeftLong = faArrowLeftLong
  faGlobe = faGlobe;
  faCalendarDays = faCalendarDays;
  faDollar = faDollar;
  faBars = faBars;
  faPaperclip = faPaperclip;
  faUser = faUser;
  faLocationDot = faLocationDot;
  faRoute = faRoute;
  faMapPin = faMapPin;
  faHouse = faHouse;

  constructor(private apiClient: ApiClientService, private ActivatedRoute: ActivatedRoute, private Router: Router) { }
  ngOnInit(): void {
    this.getApplicationDetails();
  }
  getApplicationDetails() {
    this.ActivatedRoute.params.forEach(params => this.applicationId = params['id']);
    this.apiClient.getApplicationById(this.applicationId).subscribe(response => {
      this.applicationDetails = response;
    })
  }
  handleGoBack() {
    this.Router.navigate(['home']);
  }

}
