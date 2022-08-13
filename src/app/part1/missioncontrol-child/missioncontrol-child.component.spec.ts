import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioncontrolChildComponent } from './missioncontrol-child.component';

describe('MissioncontrolChildComponent', () => {
  let component: MissioncontrolChildComponent;
  let fixture: ComponentFixture<MissioncontrolChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissioncontrolChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissioncontrolChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
