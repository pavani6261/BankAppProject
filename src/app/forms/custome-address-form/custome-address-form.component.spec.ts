import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeAddressFormComponent } from './custome-address-form.component';

describe('CustomeAddressFormComponent', () => {
  let component: CustomeAddressFormComponent;
  let fixture: ComponentFixture<CustomeAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
