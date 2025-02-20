import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLarTempComponent } from './form-lar-temp.component';

describe('FormLarTempComponent', () => {
  let component: FormLarTempComponent;
  let fixture: ComponentFixture<FormLarTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLarTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLarTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
