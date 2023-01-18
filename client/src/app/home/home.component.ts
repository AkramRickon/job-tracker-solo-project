import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';
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
    this.user = this.authService.getUser();
    this.getApplications();

  }

  getApplications() {
    this.apiClient.getUserApplication(this.user).subscribe(response => {
      console.log(response);
      this.applicationList = response;
      // console.log(this.applicationList);
    });
  }
}
