import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionmedicinesComponent } from './prescriptionmedicines.component';

describe('PrescriptionmedicinesComponent', () => {
  let component: PrescriptionmedicinesComponent;
  let fixture: ComponentFixture<PrescriptionmedicinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionmedicinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionmedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
