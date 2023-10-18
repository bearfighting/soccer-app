import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: "standings/:league", component: StandingsComponent},
  {path: "results/:team/:season/:league", component: ResultsComponent},
  {path: "main", component: MainComponent},
  {path: "**", redirectTo: "main", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
