import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trialtransfer1Component } from './trialtransfer1.component';

describe('Trialtransfer1Component', () => {
  let component: Trialtransfer1Component;
  let fixture: ComponentFixture<Trialtransfer1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Trialtransfer1Component]
    });
    fixture = TestBed.createComponent(Trialtransfer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
