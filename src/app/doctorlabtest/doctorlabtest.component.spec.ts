import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlabtestComponent } from './doctorlabtest.component';

describe('DoctorlabtestComponent', () => {
  let component: DoctorlabtestComponent;
  let fixture: ComponentFixture<DoctorlabtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorlabtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorlabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
