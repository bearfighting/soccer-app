import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from "rxjs";
import { environment } from 'src/enviroments/enviroements';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private cache: {[teamId: number]: any} = {}
  constructor(private http: HttpClient) { }

  fetchResults(teamId: number, currentSeason: number, leagueId: number) {
    if (this.cache[teamId]) {
      return of(this.cache[teamId])
    } else {
      return this.http.get(`${environment.baseURL}/fixtures?team=${teamId}&status=FT&season=${currentSeason}&league=${leagueId}`)
    }
  }
}
