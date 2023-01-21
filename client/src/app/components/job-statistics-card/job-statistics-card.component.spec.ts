import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStatisticsCardComponent } from './job-statistics-card.component';

describe('JobStatisticsCardComponent', () => {
  let component: JobStatisticsCardComponent;
  let fixture: ComponentFixture<JobStatisticsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobStatisticsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobStatisticsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
