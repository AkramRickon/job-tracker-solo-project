import { Application } from '../../interfaces/Application';
import { Component, OnInit, Input } from '@angular/core';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-job-application-statistics',
  templateUrl: './job-application-statistics.component.html',
  styleUrls: ['./job-application-statistics.component.css']
})
export class JobApplicationStatisticsComponent implements OnInit {
  @Input() applicationList!: Application[]
  @Input() pending!: Application[]
  @Input() accepted!: Application[]
  @Input() processing!: Application[]
  @Input() rejected!: Application[]
  @Input() upComingInterview!: Application[]

  title1: String = ''
  title2: String = ''
  title3: String = ''
  title4: String = ''


  faFileLines = faFileLines;
  faPlus = faPlus;
  faClock = faClock;
  faListCheck = faListCheck;

  constructor() { }
  ngOnInit(): void {

    this.title1 = "Pending"
    this.title2 = "Processing"
    this.title3 = "Accepted"
    this.title4 = "Rejected"
  }

} 
