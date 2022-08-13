import { Component, Input } from '@angular/core';
import { AdComponent } from '../ad/ad.component';

@Component({
  selector: 'app-ad-component1',
  templateUrl: './ad-component1.component.html',
  styleUrls: ['./ad-component1.component.css']
})
export class AdComponent1Component implements AdComponent {

  @Input() data: any;

}
