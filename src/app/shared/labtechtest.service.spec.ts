import { TestBed } from '@angular/core/testing';

import { LabtechtestService } from './labtechtest.service';

describe('LabtechtestService', () => {
  let service: LabtechtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtechtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
