import { TestBed } from '@angular/core/testing';

import { SavingAccTxnService } from './saving-acc-txn.service';

describe('SavingAccTxnService', () => {
  let service: SavingAccTxnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingAccTxnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
