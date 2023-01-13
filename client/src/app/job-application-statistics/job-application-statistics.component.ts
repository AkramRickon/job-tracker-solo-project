import { Application } from './../interfaces/Application';
import { Component, OnInit, Input } from '@angular/core';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-application-statistics',
  templateUrl: './job-application-statistics.component.html',
  styleUrls: ['./job-application-statistics.component.css']
})
export class JobApplicationStatisticsComponent implements OnInit {
  @Input() applicationList!: Application[]

  pending!: number
  accepted!: number
  processing!: number
  rejected!: number

  title1!: String
  title2!: String
  title3!: String
  title4!: String


  faFileLines = faFileLines;
  faPlus = faPlus;

  constructor() { }
  ngOnInit(): void {
    this.filterApplication();

    this.title1 = "Pending"
    this.title2 = "Processing"
    this.title3 = "Accepted"
    this.title4 = "Rejected"
    // console.log(this.accepted);
    // console.log(this.processing);
    // console.log(this.pending);
    // console.log(this.rejected);
  }

  filterApplication() {
    this.accepted = this.applicationList.filter(application => application.status === 'accepted').length;
    this.pending = this.applicationList.filter(application => application.status === 'pending').length;
    this.rejected = this.applicationList.filter(application => application.status === 'rejected').length;
    this.processing = this.applicationList.filter(application => application.status === 'processing').length;
  }

}
