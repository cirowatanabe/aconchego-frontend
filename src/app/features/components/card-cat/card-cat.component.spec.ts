import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCatComponent } from './card-cat.component';

describe('CardCatComponent', () => {
  let component: CardCatComponent;
  let fixture: ComponentFixture<CardCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
