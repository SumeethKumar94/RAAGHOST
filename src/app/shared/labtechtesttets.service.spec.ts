import { TestBed } from '@angular/core/testing';

import { LabtechtesttetsService } from './labtechtesttets.service';

describe('LabtechtesttetsService', () => {
  let service: LabtechtesttetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtechtesttetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
