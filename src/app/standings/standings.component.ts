import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs"
import { environment } from 'src/enviroments/enviroements';
import { SeasonsService } from '../services/seasons.service';
import {Standing} from '../types/standings.type';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit, OnDestroy {
  routeParamsSubscription: Subscription | undefined
  standings: Array<Standing> | undefined;
  constructor(private route: ActivatedRoute, private seasonsService: SeasonsService) {}

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.paramMap.subscribe((params) => {
      const leagueId = environment.leagueIds[params.get("country")?.toLowerCase() || ""]
      this.seasonsService.fetchSeasons(leagueId).subscribe(data => this.standings = data);
    })
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
  }
}
