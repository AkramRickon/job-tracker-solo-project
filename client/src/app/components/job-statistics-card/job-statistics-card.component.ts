import { Component, Input, OnInit } from '@angular/core';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faUserClock } from '@fortawesome/free-solid-svg-icons';
import { Application } from '../../interfaces/Application';


@Component({
  selector: 'app-job-statistics-card',
  templateUrl: './job-statistics-card.component.html',
  styleUrls: ['./job-statistics-card.component.css']
})
export class JobStatisticsCardComponent implements OnInit {
  @Input() statistics!: Application[]
  @Input() title?: String
  // @Input() applicationList : Application[]=[]

  faUserXmark = faUserXmark;
  faUserCheck = faUserCheck;
  faSpinner = faSpinner;
  faBarsProgress = faBarsProgress;
  faUserClock = faUserClock;

  constructor() { }
  ngOnInit(): void {

  }


}
