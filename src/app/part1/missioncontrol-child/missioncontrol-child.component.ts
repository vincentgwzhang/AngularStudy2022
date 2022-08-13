import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from 'src/app/mission.service';

@Component({
  selector: 'app-missioncontrol-child',
  templateUrl: './missioncontrol-child.component.html',
  styleUrls: ['./missioncontrol-child.component.css']
})
export class MissioncontrolChildComponent implements OnDestroy {

  @Input() astronaut: string = '';

  mission = '<no mission announced>';

  confirmed = false;
  announced = false;

  subscription: Subscription;

  constructor(private missionService : MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  
  }

}
