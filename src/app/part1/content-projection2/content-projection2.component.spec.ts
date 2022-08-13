import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjection2Component } from './content-projection2.component';

describe('ContentProjection2Component', () => {
  let component: ContentProjection2Component;
  let fixture: ComponentFixture<ContentProjection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
