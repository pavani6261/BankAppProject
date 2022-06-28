import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccountFormComponent } from './loan-account-form.component';

describe('LoanAccountFormComponent', () => {
  let component: LoanAccountFormComponent;
  let fixture: ComponentFixture<LoanAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAccountFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
