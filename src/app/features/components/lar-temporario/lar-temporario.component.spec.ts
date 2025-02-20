import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarTemporarioComponent } from './lar-temporario.component';

describe('LarTemporarioComponent', () => {
  let component: LarTemporarioComponent;
  let fixture: ComponentFixture<LarTemporarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LarTemporarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LarTemporarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
