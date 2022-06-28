import { TestBed } from '@angular/core/testing';

import { LoanAccTxnService } from './loan-acc-txn.service';

describe('LoanAccTxnService', () => {
  let service: LoanAccTxnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanAccTxnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
