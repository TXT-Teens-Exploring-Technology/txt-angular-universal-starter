import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldSuccessComponent } from './form-field-success.component';

describe('FormFieldSuccessComponent', () => {
  let component: FormFieldSuccessComponent;
  let fixture: ComponentFixture<FormFieldSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
