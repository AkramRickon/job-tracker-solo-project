import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-statistics-card',
  templateUrl: './job-statistics-card.component.html',
  styleUrls: ['./job-statistics-card.component.css']
})
export class JobStatisticsCardComponent {
  @Input() statistics?: number
  @Input() title?: String
  

}
