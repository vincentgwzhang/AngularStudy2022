import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  @Input('master') master = '';

  hero: Hero = {
    id: 878,
    name: 'crack hank'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onVoted_runInParent(isAgree: boolean): void {
    console.log('Receive from child component, value = ' + isAgree);
  }
}
