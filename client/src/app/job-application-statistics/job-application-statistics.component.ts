import { Application } from './../interfaces/Application';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-application-statistics',
  templateUrl: './job-application-statistics.component.html',
  styleUrls: ['./job-application-statistics.component.css']
})
export class JobApplicationStatisticsComponent implements OnInit {
  @Input() applicationList!: Application[]

  pending!: Application[]
  accepted!: Application[]
  processing!: Application[]
  rejected!: Application[]

  constructor() { }
  ngOnInit(): void {
    this.filterApplication();
    // console.log(this.accepted);
    // console.log(this.processing);
    // console.log(this.pending);
    // console.log(this.rejected);
  }

  filterApplication() {
    this.accepted = this.applicationList.filter(application => application.status === 'accepted');
    this.pending = this.applicationList.filter(application => application.status === 'pending');
    this.rejected = this.applicationList.filter(application => application.status === 'rejected');
    this.processing = this.applicationList.filter(application => application.status === 'processing');
  }

}
