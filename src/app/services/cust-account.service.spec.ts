import { TestBed } from '@angular/core/testing';

import { CustAccountService } from './cust-account.service';

describe('CustAccountService', () => {
  let service: CustAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
