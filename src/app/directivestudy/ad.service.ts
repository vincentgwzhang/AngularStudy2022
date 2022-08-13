import { Injectable } from '@angular/core';
import { AdComponent1Component } from './ad-component1/ad-component1.component';
import { AdComponent2Component } from './ad-component2/ad-component2.component';
import { AdItem } from './ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds() {
    return [
      new AdItem(
        AdComponent2Component,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        AdComponent2Component,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        AdComponent1Component,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        AdComponent1Component,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}
