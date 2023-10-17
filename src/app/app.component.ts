import { Component } from '@angular/core';

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
}
