import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial1Component } from './trial1.component';

describe('Trial1Component', () => {
  let component: Trial1Component;
  let fixture: ComponentFixture<Trial1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Trial1Component]
    });
    fixture = TestBed.createComponent(Trial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
