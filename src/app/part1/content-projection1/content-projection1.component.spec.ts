import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjection1Component } from './content-projection1.component';

describe('ContentProjection1Component', () => {
  let component: ContentProjection1Component;
  let fixture: ComponentFixture<ContentProjection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
