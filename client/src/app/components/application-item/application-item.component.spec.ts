import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationItemComponent } from './application-item.component';

describe('ApplicationItemComponent', () => {
  let component: ApplicationItemComponent;
  let fixture: ComponentFixture<ApplicationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
