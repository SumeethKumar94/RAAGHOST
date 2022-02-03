import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionmedicineListComponent } from './prescriptionmedicine-list.component';

describe('PrescriptionmedicineListComponent', () => {
  let component: PrescriptionmedicineListComponent;
  let fixture: ComponentFixture<PrescriptionmedicineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionmedicineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionmedicineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
