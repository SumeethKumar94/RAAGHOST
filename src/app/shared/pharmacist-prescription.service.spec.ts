import { TestBed } from '@angular/core/testing';

import { PharmacistPrescriptionService } from './pharmacist-prescription.service';

describe('PharmacistPrescriptionService', () => {
  let service: PharmacistPrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacistPrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
