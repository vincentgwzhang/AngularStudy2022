import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listen-child',
  templateUrl: './listen-child.component.html',
  styleUrls: ['./listen-child.component.css']
})
export class ListenChildComponent implements OnInit {

  @Output() voted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
