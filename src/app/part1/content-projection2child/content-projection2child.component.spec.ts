import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjection2childComponent } from './content-projection2child.component';

describe('ContentProjection2childComponent', () => {
  let component: ContentProjection2childComponent;
  let fixture: ComponentFixture<ContentProjection2childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjection2childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjection2childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
