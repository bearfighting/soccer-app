import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, switchMap, take, tap } from "rxjs"
import { environment } from 'src/enviroments/enviroements';
import Leagues from "../types/leagues.type"
import Standings, { Standing } from '../types/standings.type';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {
  private cache: { [id: string]: { currentSeason: number, standings: Standing[] } } = {}
  constructor(private http: HttpClient) { }

  fetchSeasons(leagueId: number) {
    if (this.cache[leagueId]) {
      return of(this.cache[leagueId]);
    } else {
      return this.http.get<Leagues>(`${environment.baseURL}/leagues?id=${leagueId}`).pipe(
        switchMap(data => {
          const currentSeason = data?.response[0].seasons.find((season) => season.current)?.year!!
          return this.http.get<Standings>(`${environment.baseURL}/standings?season=${currentSeason}&league=${leagueId}`).pipe(
            map(data => { return { currentSeason, standings: data.response[0].league.standings[0] } }),
            tap(data => this.cache[leagueId] = data))
        })
      )
    }

  }
}
