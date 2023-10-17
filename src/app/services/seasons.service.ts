import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, switchMap, take, tap } from "rxjs"
import { environment } from 'src/enviroments/enviroements';
import Leagues from "../types/leagues.type"
import Standings from '../types/standings.type';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  standingsObject$ = new BehaviorSubject<Standings>({response: []})
  standingsObservable = this.standingsObject$.asObservable();
  constructor(private http: HttpClient) { }

  fetchSeasons(leagueId: number) {
    console.log('league id', leagueId)
    return this.http.get<Leagues>(`${environment.baseURL}/leagues?id=${leagueId}`).pipe(
      switchMap(data => {
        const currentSeason = data?.response[0].seasons.find((season) => season.current)?.year
        return this.http.get<Standings>(`${environment.baseURL}/standings?season=${currentSeason}&league=${leagueId}`).pipe(map(data => data.response[0].league.standings[0]))
      }),
      take(10),
    )
  }
}
