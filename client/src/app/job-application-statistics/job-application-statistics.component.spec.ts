import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationStatisticsComponent } from './job-application-statistics.component';

describe('JobApplicationStatisticsComponent', () => {
  let component: JobApplicationStatisticsComponent;
  let fixture: ComponentFixture<JobApplicationStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
