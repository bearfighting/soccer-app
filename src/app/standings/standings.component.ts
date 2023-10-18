import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs"
import { environment } from 'src/enviroments/enviroements';
import { StandingsService } from '../services/standings.service';
import { Standing } from '../types/standings.type';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit, OnDestroy {
  routeParamsSubscription: Subscription | undefined
  standings: Array<Standing> | undefined;
  currentSeason!: number;
  leagueId!: number; 
  constructor(private activeRoute: ActivatedRoute, private seasonsService: StandingsService, private router: Router) { }

  ngOnInit(): void {
    this.routeParamsSubscription = this.activeRoute.paramMap.subscribe((params) => {
      this.leagueId = Number(params.get("league"))
      console.log("The league id is ", this.leagueId, "and the params is ", params);
      this.seasonsService.fetchSeasons(this.leagueId).subscribe(data => {this.standings = data.standings; this.currentSeason = data.currentSeason});
    })
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
  }

  handleStandingClick(teamId: number) {
    this.router.navigate(["results", teamId, this.currentSeason, this.leagueId])
  }
}
