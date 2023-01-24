import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../../interfaces/Application';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  @Input() applicationList: Application[]=[]

  title1: string=''
  title2: string=''
  title3: string=''
  title4: string=''


  pending!: Application[]
  accepted!: Application[]
  processing!: Application[]
  rejected!: Application[]
  upComingInterview!: Application[]


  constructor() { }

  ngOnInit(): void {
    this.filterApplication();

    this.title1 = "Pending"
    this.title2 = "Processing"
    this.title3 = "Accepted"
    this.title4 = "Rejected"
  }

  filterApplication() {
    this.accepted = this.applicationList.filter(application => application.status === 'accepted');
    this.pending = this.applicationList.filter(application => application.status === ('pending'));
    this.rejected = this.applicationList.filter(application => application.status === 'rejected');
    this.processing = this.applicationList.filter(application => application.status === 'processing');
    this.upComingInterview = this.applicationList.filter(application => application.status === 'processing')
    this.upComingInterview = this.upComingInterview.sort((a, b) => new Date(a.interviewDate).getTime() - new Date(b.interviewDate).getTime());
  }

  deleteApplicationFromList(id: String) {
    const updatedList = this.applicationList.filter(application => application._id !== id);
    this.applicationList = updatedList;
    this.filterApplication();
  }
}
