import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentschedulingComponent } from './appointmentscheduling.component';

describe('AppointmentschedulingComponent', () => {
  let component: AppointmentschedulingComponent;
  let fixture: ComponentFixture<AppointmentschedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentschedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentschedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
