import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trialtransfer2Component } from './trialtransfer2.component';

describe('Trialtransfer2Component', () => {
  let component: Trialtransfer2Component;
  let fixture: ComponentFixture<Trialtransfer2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Trialtransfer2Component]
    });
    fixture = TestBed.createComponent(Trialtransfer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
