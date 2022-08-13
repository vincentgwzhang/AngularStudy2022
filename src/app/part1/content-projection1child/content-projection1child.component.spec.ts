import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjection1childComponent } from './content-projection1child.component';

describe('ContentProjection1childComponent', () => {
  let component: ContentProjection1childComponent;
  let fixture: ComponentFixture<ContentProjection1childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjection1childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjection1childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
