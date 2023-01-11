import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Application } from '../application';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  applicationList?:Application[]

  constructor(private apiClient: ApiClientService) { }
  ngOnInit(): void {
    this.getApplications();
  }

  getApplications (){
    this.apiClient.getApplications().subscribe(response=>{
      this.applicationList=response;
      console.log(this.applicationList);
    });
  }
}
