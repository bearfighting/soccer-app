import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from "rxjs";
import { environment } from 'src/enviroments/enviroements';
import { Response } from '../types/fixtures.type';
@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private cache: {[teamId: number]: Response} = {}
  constructor(private http: HttpClient) { }

  fetchResults(teamId: number, currentSeason: number, leagueId: number) {
    if (this.cache[teamId]) {
      return of(this.cache[teamId])
    } else {
      return this.http.get<Response>(`${environment.baseURL}/fixtures?team=${teamId}&status=FT&season=${currentSeason}&league=${leagueId}`).pipe(tap(data => this.cache[teamId] = data))
    }
  }
}
