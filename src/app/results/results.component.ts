import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsService } from '../services/results.service';
import Fixture from '../types/fixtures.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  results!: Fixture[]
  leagueId! : number
  loading: boolean = false;
  resultSubscription?: Subscription;
  constructor(private activeRoute: ActivatedRoute, private resultsService: ResultsService, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data => {
      this.loading = true;
      const teamId = Number(data.get('team'))
      const currentSeason = Number(data.get('season'))
      this.leagueId = Number(data.get('league'))
      this.resultsService.fetchResults(teamId, currentSeason, this.leagueId).subscribe(data => {this.loading = false; this.results = data.response});
      }
    )
  }

  ngOnDestroy(): void {
    this.resultSubscription?.unsubscribe();
  }

  handleBackClick() {
    this.router.navigate(["standings", this.leagueId])
  }
}
