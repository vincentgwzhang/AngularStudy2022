import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { Part1Component } from './part1/part1.component';
import { HeroParentComponent } from './part1/hero-parent/hero-parent.component';
import { HeroChildComponent } from './part1/hero-child/hero-child.component';
import { ListenChildComponent } from './part1/listen-child/listen-child.component';
import { CountdownParentComponent } from './part1/countdown-parent/countdown-parent.component';
import { CountdownTimerComponent } from './part1/countdown-timer/countdown-timer.component';
import { CountdownParent2Component } from './part1/countdown-parent2/countdown-parent2.component';
import { CountdownTimer2Component } from './part1/countdown-timer2/countdown-timer2.component';
import { MissioncontrolComponent } from './part1/missioncontrol/missioncontrol.component';
import { MissioncontrolChildComponent } from './part1/missioncontrol-child/missioncontrol-child.component';
import { ContentProjection1Component } from './part1/content-projection1/content-projection1.component';
import { ContentProjection1childComponent } from './part1/content-projection1child/content-projection1child.component';
import { ContentProjection2Component } from './part1/content-projection2/content-projection2.component';
import { ContentProjection2childComponent } from './part1/content-projection2child/content-projection2child.component';
import { AdBannerComponent } from './directivestudy/ad-banner/ad-banner.component';
import { AdComponent1Component } from './directivestudy/ad-component1/ad-component1.component';
import { AdComponent2Component } from './directivestudy/ad-component2/ad-component2.component';
import { AdDirective } from './directivestudy/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    Part1Component,
    HeroParentComponent,
    HeroChildComponent,
    ListenChildComponent,
    CountdownParentComponent,
    CountdownTimerComponent,
    CountdownParent2Component,
    CountdownTimer2Component,
    MissioncontrolComponent,
    MissioncontrolChildComponent,
    ContentProjection1Component,
    ContentProjection1childComponent,
    ContentProjection2Component,
    ContentProjection2childComponent,
    AdBannerComponent,
    AdComponent1Component,
    AdComponent2Component,
    AdDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
