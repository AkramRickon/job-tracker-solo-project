import { Component, Input } from '@angular/core';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-job-statistics-card',
  templateUrl: './job-statistics-card.component.html',
  styleUrls: ['./job-statistics-card.component.css']
})
export class JobStatisticsCardComponent {
  @Input() statistics?: number
  @Input() title?: String

  faUserXmark=faUserXmark;
  faUserCheck=faUserCheck;
  faSpinner=faSpinner;
  faBarsProgress=faBarsProgress;

}
