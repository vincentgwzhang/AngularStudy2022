import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenChildComponent } from './listen-child.component';

describe('ListenChildComponent', () => {
  let component: ListenChildComponent;
  let fixture: ComponentFixture<ListenChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
