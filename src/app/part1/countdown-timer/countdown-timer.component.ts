import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnDestroy {

  ngOnDestroy() { }

  start() { console.log(`child [start] function triggered`); }
  stop()  { console.log(`child [stop] function triggered`); }
  
}
