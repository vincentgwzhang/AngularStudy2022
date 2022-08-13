import { Component, DoCheck, OnInit, OnDestroy, OnChanges, SimpleChanges, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit, DoCheck, OnDestroy, OnChanges, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {

  name: string = 'vincent';

  constructor() { }

  ngOnInit(): void {
    console.log('[ngOnInit] triggered');//1
  }

  ngDoCheck() : void {//内部如果点击第二次，那么这个函数会被调用
    console.log('[ngDoCheck] triggered');//2
  }

  ngAfterContentInit() {//内部如果点击第二次，那么这个函数会被调用
    console.log('[ngAfterContentInit] triggered');//3
  }

  ngAfterContentChecked() {//内部如果点击第二次，那么这个函数会被调用
    console.log('[ngAfterContentChecked] triggered');//4
  }

  ngAfterViewInit() {
    console.log('[ngAfterViewInit] triggered');//5
  }

  ngAfterViewChecked() {
    console.log('[ngAfterViewChecked] triggered');//6
  }

  ngOnDestroy() {// 这个函数会在 component html 离开的时候调用
    console.log('[ngOnDestroy] triggered');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[ngOnChanges] triggered');
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

}
