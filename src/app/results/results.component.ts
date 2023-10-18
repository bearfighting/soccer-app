import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsService } from '../services/results.service';
import Fixture from '../types/fixtures.type';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results!: Fixture[]
  leagueId! : number
  constructor(private activeRoute: ActivatedRoute, private resultsService: ResultsService, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data => {
      const teamId = Number(data.get('team'))
      const currentSeason = Number(data.get('season'))
      this.leagueId = Number(data.get('league'))
      this.resultsService.fetchResults(teamId, currentSeason, this.leagueId).subscribe(data => {this.results = data.response});
      }
    )
  }

  handleBackClick() {
    this.router.navigate(["standings", this.leagueId])
  }
}
