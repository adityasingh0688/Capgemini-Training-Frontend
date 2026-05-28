import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abpout } from './abpout';

describe('Abpout', () => {
  let component: Abpout;
  let fixture: ComponentFixture<Abpout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abpout],
    }).compileComponents();

    fixture = TestBed.createComponent(Abpout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
