import { TestBed } from '@angular/core/testing';

import { PrescriptionmedicinesService } from './prescriptionmedicines.service';

describe('PrescriptionmedicinesService', () => {
  let service: PrescriptionmedicinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionmedicinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
