import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  @Input() applicationList!: Application[]

  title1!: String
  title2!: String
  title3!: String
  title4!: String


  pending!: Application[]
  accepted!: Application[]
  processing!: Application[]
  rejected!: Application[]

  constructor() { }

  ngOnInit(): void {
    this.filterApplication();

    this.title1 = "Pending"
    this.title2 = "Processing"
    this.title3 = "Accepted"
    this.title4 = "Rejected"

    // console.log(this.applicationList)

    // console.log(this.accepted);
    // console.log(this.processing);
    // console.log(this.pending);
    // console.log(this.rejected);
  }

  filterApplication() {
    this.accepted = this.applicationList.filter(application => application.status === 'accepted');
    this.pending = this.applicationList.filter(application => application.status === ('pending'));
    this.rejected = this.applicationList.filter(application => application.status === 'rejected');
    this.processing = this.applicationList.filter(application => application.status === 'processing');
  }

  deleteApplicationFromList(id: String) {
    const updatedList=this.applicationList.filter(application=>application._id !==id);
    this.applicationList=updatedList;
    this.filterApplication();
  }
}
