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
    CountdownTimer2Component
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
