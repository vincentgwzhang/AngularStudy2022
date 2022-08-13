import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/mission.service';

@Component({
  selector: 'app-missioncontrol',
  templateUrl: './missioncontrol.component.html',
  styleUrls: ['./missioncontrol.component.css']
})
export class MissioncontrolComponent implements OnInit {

  astronauts : string[] = ['Lovell', 'Swigert', 'Haise'];

  history: string[] = [];

  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];

  constructor(private missionService : MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {this.history.push(`${astronaut} confirmed the mission`);}
    );
  }

  ngOnInit(): void {
  }

  nextMission = 0;
  announce() : void {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
