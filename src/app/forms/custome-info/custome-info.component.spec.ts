import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeInfoComponent } from './custome-info.component';

describe('CustomeInfoComponent', () => {
  let component: CustomeInfoComponent;
  let fixture: ComponentFixture<CustomeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
