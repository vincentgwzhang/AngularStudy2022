import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownTimer2Component } from '../countdown-timer2/countdown-timer2.component';

@Component({
  selector: 'app-countdown-parent2',
  templateUrl: './countdown-parent2.component.html',
  styleUrls: ['./countdown-parent2.component.css']
})
export class CountdownParent2Component implements OnInit {

  @ViewChild(CountdownTimer2Component)
  private timer2!: CountdownTimer2Component;

  constructor() { }

  ngOnInit(): void {
  }

  triggerChildStart() : void {
    this.timer2.start();
  }

  triggerChildStop() : void {
    this.timer2.stop();
  }

}
