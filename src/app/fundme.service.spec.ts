import { TestBed, inject } from '@angular/core/testing';

import { FundmeService } from './fundme.service';

describe('FundmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundmeService]
    });
  });

  it('should ...', inject([FundmeService], (service: FundmeService) => {
    expect(service).toBeTruthy();
  }));
});
