import { TestBed } from '@angular/core/testing';

import { RecappointmentService } from './recappointment.service';

describe('RecappointmentService', () => {
  let service: RecappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
