import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: "standings/:country", component: StandingsComponent},
  {path: "main", component: MainComponent},
  {path: "**", redirectTo: "main", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
