import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Application } from '../interfaces/Application';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: String | null = '';
  applicationList?: Application[]


  constructor(private apiClient: ApiClientService,
    private authService: AuthService) { }
  ngOnInit(): void {
    this.getApplications();
    this.user = this.authService.getUser();
  }

  getApplications() {
    this.apiClient.getApplications().subscribe(response => {
      this.applicationList = response.filter(application=> application.user===this.user);
      // console.log(this.applicationList);
    });
  }
}
