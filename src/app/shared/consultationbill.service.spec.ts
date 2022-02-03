import { TestBed } from '@angular/core/testing';

import { ConsultationbillService } from './consultationbill.service';

describe('ConsultationbillService', () => {
  let service: ConsultationbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
