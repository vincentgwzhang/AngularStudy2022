import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Part1Component } from './part1/part1.component';
import { CountdownParentComponent } from './part1/countdown-parent/countdown-parent.component';
import { CountdownParent2Component } from './part1/countdown-parent2/countdown-parent2.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },

  { path: 'part1', component: Part1Component },
  { path: 'fc1', component: CountdownParentComponent },
  { path: 'fc2', component: CountdownParent2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
