import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionmedicineComponent } from './prescriptionmedicine.component';

describe('PrescriptionmedicineComponent', () => {
  let component: PrescriptionmedicineComponent;
  let fixture: ComponentFixture<PrescriptionmedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionmedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
