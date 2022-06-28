import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccOperationsComponent } from './loan-acc-operations.component';

describe('LoanAccOperationsComponent', () => {
  let component: LoanAccOperationsComponent;
  let fixture: ComponentFixture<LoanAccOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAccOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
