import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs"
import { StandingsService } from '../services/standings.service';
import { Standing } from '../types/standings.type';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit, OnDestroy {
  private routeParamsSubscription?: Subscription
  standings?: Array<Standing>;
  private currentSeason!: number;
  private leagueId!: number;
  loading: boolean = false;
  
  constructor(private activeRoute: ActivatedRoute, private seasonsService: StandingsService, private router: Router) { }

  ngOnInit(): void {
    this.routeParamsSubscription = this.activeRoute.paramMap.subscribe((params) => {
      this.loading = true;
      this.leagueId = Number(params.get("league"))
      this.seasonsService.fetchSeasons(this.leagueId).subscribe(data => {this.loading = false; this.standings = data.standings; this.currentSeason = data.currentSeason});
    })
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
  }

  handleStandingClick(teamId: number) {
    this.router.navigate(["results", teamId, this.currentSeason, this.leagueId])
  }
}
