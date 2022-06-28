import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAccOperationsComponent } from './saving-acc-operations.component';

describe('SavingAccOperationsComponent', () => {
  let component: SavingAccOperationsComponent;
  let fixture: ComponentFixture<SavingAccOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingAccOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingAccOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
