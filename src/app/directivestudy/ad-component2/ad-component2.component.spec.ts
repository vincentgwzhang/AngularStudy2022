import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdComponent2Component } from './ad-component2.component';

describe('AdComponent2Component', () => {
  let component: AdComponent2Component;
  let fixture: ComponentFixture<AdComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
