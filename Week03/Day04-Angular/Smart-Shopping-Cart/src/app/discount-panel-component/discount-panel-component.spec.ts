import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountPanelComponent } from './discount-panel-component';

describe('DiscountPanelComponent', () => {
  let component: DiscountPanelComponent;
  let fixture: ComponentFixture<DiscountPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
