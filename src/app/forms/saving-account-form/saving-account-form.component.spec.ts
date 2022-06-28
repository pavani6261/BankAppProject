import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAccountFormComponent } from './saving-account-form.component';

describe('SavingAccountFormComponent', () => {
  let component: SavingAccountFormComponent;
  let fixture: ComponentFixture<SavingAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingAccountFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
