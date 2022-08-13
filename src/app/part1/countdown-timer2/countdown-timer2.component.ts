import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer2',
  templateUrl: './countdown-timer2.component.html',
  styleUrls: ['./countdown-timer2.component.css']
})
export class CountdownTimer2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  start() { console.log(`child2 [start] function triggered`); }
  stop()  { console.log(`child2 [stop] function triggered`); }

}
