import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.css']
})
export class JobStatusComponent implements OnInit {
  @Input() applicationList!:Application[]

  pending!:Application[]
  accepted!:Application[]
  processing!:Application[]
  rejected!:Application[]

  constructor(){}
  ngOnInit(): void {
    this.filterApplication();
    // console.log(this.accepted);
    // console.log(this.processing);
    // console.log(this.pending);
    // console.log(this.rejected);
  }

  filterApplication(){
    this.accepted=this.applicationList.filter(application => application.status === 'accepted');
    this.pending=this.applicationList.filter(application => application.status === 'pending');
    this.rejected=this.applicationList.filter(application => application.status === 'rejected');
    this.processing=this.applicationList.filter(application => application.status === 'processing');
  }

}
