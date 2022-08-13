import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdComponent1Component } from './ad-component1.component';

describe('AdComponent1Component', () => {
  let component: AdComponent1Component;
  let fixture: ComponentFixture<AdComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
