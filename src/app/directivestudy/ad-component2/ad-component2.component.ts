import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../ad/ad.component';

@Component({
  selector: 'app-ad-component2',
  templateUrl: './ad-component2.component.html',
  styleUrls: ['./ad-component2.component.css']
})
export class AdComponent2Component implements AdComponent {

  @Input() data: any;

}
