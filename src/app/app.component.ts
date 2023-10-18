import { Component } from '@angular/core';
import { environment } from 'src/enviroments/enviroements';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: string[] = [
    "England", "Spain", "Germany", "France", "Italy"
  ];
  title = 'FOOTBALL UPDATES';

  getLegueId(country: string) {
    return environment.leagueIds[country];
  }
}
