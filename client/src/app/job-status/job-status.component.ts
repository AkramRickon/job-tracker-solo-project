import { Component, Input } from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.css']
})
export class JobStatusComponent {
  @Input() applicationList!:Application[]
}
