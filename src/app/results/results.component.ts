import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsService } from '../services/results.service';
import Fixture from '../types/fixtures.type';

const results = {
  "get": "fixtures",
  "parameters": {
      "team": "157",
      "status": "FT",
      "season": "2023",
      "league": "78"
  },
  "errors": [],
  "results": 7,
  "paging": {
      "current": 1,
      "total": 1
  },
  "response": [
      {
          "fixture": {
              "id": 1048881,
              "referee": "F. Zwayer",
              "timezone": "UTC",
              "date": "2023-08-18T18:30:00+00:00",
              "timestamp": 1692383400,
              "periods": {
                  "first": 1692383400,
                  "second": 1692387000
              },
              "venue": {
                  "id": 755,
                  "name": "wohninvest WESERSTADION",
                  "city": "Bremen"
              },
              "status": {
                  "long": "Match Finished",
                  "short": "FT",
                  "elapsed": 90
              }
          },
          "league": {
              "id": 78,
              "name": "Bundesliga",
              "country": "Germany",
              "logo": "https://media-4.api-sports.io/football/leagues/78.png",
              "flag": "https://media-4.api-sports.io/flags/de.svg",
              "season": 2023,
              "round": "Regular Season - 1"
          },
          "teams": {
              "home": {
                  "id": 162,
                  "name": "Werder Bremen",
                  "logo": "https://media-4.api-sports.io/football/teams/162.png",
                  "winner": false
              },
              "away": {
                  "id": 157,
                  "name": "Bayern Munich",
                  "logo": "https://media-4.api-sports.io/football/teams/157.png",
                  "winner": true
              }
          },
          "goals": {
              "home": 0,
              "away": 4
          },
          "score": {
              "halftime": {
                  "home": 0,
                  "away": 1
              },
              "fulltime": {
                  "home": 0,
                  "away": 4
              },
              "extratime": {
                  "home": null,
                  "away": null
              },
              "penalty": {
                  "home": null,
                  "away": null
              }
          }
      },
      {
          "fixture": {
              "id": 1048890,
              "referee": "D. Siebert",
              "timezone": "UTC",
              "date": "2023-08-27T15:30:00+00:00",
              "timestamp": 1693150200,
              "periods": {
                  "first": 1693150200,
                  "second": 1693153800
              },
              "venue": {
                  "id": 700,
                  "name": "Allianz Arena",
                  "city": "München"
              },
              "status": {
                  "long": "Match Finished",
                  "short": "FT",
                  "elapsed": 90
              }
          },
          "league": {
              "id": 78,
              "name": "Bundesliga",
              "country": "Germany",
              "logo": "https://media-4.api-sports.io/football/leagues/78.png",
              "flag": "https://media-4.api-sports.io/flags/de.svg",
              "season": 2023,
              "round": "Regular Season - 2"
          },
          "teams": {
              "home": {
                  "id": 157,
                  "name": "Bayern Munich",
                  "logo": "https://media-4.api-sports.io/football/teams/157.png",
                  "winner": true
              },
              "away": {
                  "id": 170,
                  "name": "FC Augsburg",
                  "logo": "https://media-4.api-sports.io/football/teams/170.png",
                  "winner": false
              }
          },
          "goals": {
              "home": 3,
              "away": 1
          },
          "score": {
              "halftime": {
                  "home": 2,
                  "away": 0
              },
              "fulltime": {
                  "home": 3,
                  "away": 1
              },
              "extratime": {
                  "home": null,
                  "away": null
              },
              "penalty": {
                  "home": null,
                  "away": null
              }
          }
      },
      {
          "fixture": {
              "id": 1048903,
              "referee": "D. Aytekin",
              "timezone": "UTC",
              "date": "2023-09-02T16:30:00+00:00",
              "timestamp": 1693672200,
              "periods": {
                  "first": 1693672200,
                  "second": 1693675800
              },
              "venue": {
                  "id": 703,
                  "name": "Stadion im BORUSSIA-PARK",
                  "city": "Mönchengladbach"
              },
              "status": {
                  "long": "Match Finished",
                  "short": "FT",
                  "elapsed": 90
              }
          },
          "league": {
              "id": 78,
              "name": "Bundesliga",
              "country": "Germany",
              "logo": "https://media-4.api-sports.io/football/leagues/78.png",
              "flag": "https://media-4.api-sports.io/flags/de.svg",
              "season": 2023,
              "round": "Regular Season - 3"
          },
          "teams": {
              "home": {
                  "id": 163,
                  "name": "Borussia Monchengladbach",
                  "logo": "https://media-4.api-sports.io/football/teams/163.png",
                  "winner": false
              },
              "away": {
                  "id": 157,
                  "name": "Bayern Munich",
                  "logo": "https://media-4.api-sports.io/football/teams/157.png",
                  "winner": true
              }
          },
          "goals": {
              "home": 1,
              "away": 2
          },
          "score": {
              "halftime": {
                  "home": 1,
                  "away": 0
              },
              "fulltime": {
                  "home": 1,
                  "away": 2
              },
              "extratime": {
                  "home": null,
                  "away": null
              },
              "penalty": {
                  "home": null,
                  "away": null
              }
          }
      },
      {
          "fixture": {
              "id": 1048908,
              "referee": "D. Schlager",
              "timezone": "UTC",
              "date": "2023-09-15T18:30:00+00:00",
              "timestamp": 1694802600,
              "periods": {
                  "first": 1694802600,
                  "second": 1694806200
              },
              "venue": {
                  "id": 700,
                  "name": "Allianz Arena",
                  "city": "München"
              },
              "status": {
                  "long": "Match Finished",
                  "short": "FT",
                  "elapsed": 90
              }
          },
          "league": {
              "id": 78,
              "name": "Bundesliga",
              "country": "Germany",
              "logo": "https://media-4.api-sports.io/football/leagues/78.png",
              "flag": "https://media-4.api-sports.io/flags/de.svg",
              "season": 2023,
              "round": "Regular Season - 4"
          },
          "teams": {
              "home": {
                  "id": 157,
                  "name": "Bayern Munich",
                  "logo": "https://media-4.api-sports.io/football/teams/157.png",
                  "winner": null
              },
              "away": {
                  "id": 168,
                  "name": "Bayer Leverkusen",
                  "logo": "https://media-4.api-sports.io/football/teams/168.png",
                  "winner": null
              }
          },
          "goals": {
              "home": 2,
              "away": 2
          },
          "score": {
              "halftime": {
                  "home": 1,
                  "away": 1
              },
              "fulltime": {
                  "home": 2,
                  "away": 2
              },
              "extratime": {
                  "home": null,
                  "away": null
              },
              "penalty": {
                  "home": null,
                  "away": null
              }
          }
      },
      {
          "fixture": {
              "id": 1048917,
              "referee": "R. Hartmann",
              "timezone": "UTC",
              "date": "2023-09-23T13:30:00+00:00",
              "timestamp": 1695475800,
              "periods": {
                  "first": 1695475800,
                  "second": 1695479400
              },
              "venue": {
                  "id": 700,
                  "name": "Allianz Arena",
                  "city": "München"
              },
              "status": {
                  "long": "Match Finished",
                  "short": "FT",
                  "elapsed": 90
              }
          },
          "league": {
              "id": 78,
              "name": "Bundesliga",
              "country": "Germany",
              "logo": "https://media-4.api-sports.io/football/leagues/78.png",
              "flag": "https://media-4.api-sports.io/flags/de.svg",
              "season": 2023,
              "round": "Regular Season - 5"
          },
          "teams": {
              "home": {
                  "id": 157,
                  "name": "Bayern Munich",
                  "logo": "https://media-4.api-sports.io/football/teams/157.png",
                  "winner": true
              },
              "away": {
                  "id": 176,
                  "name": "VfL BOCHUM",
                  "logo": "https://media-4.api-sports.io/football/teams/176.png",
                  "winner": false
              }
          },
          "goals": {
              "home": 7,
              "away": 0
          },
          "score": {
              "halftime": {
                  "home": 4,
                  "away": 0
              },
              "fulltime": {
                  "home": 7,
                  "away": 0
              },
              "extratime": {
                  "home": null,
                  "away": null
              },
              "penalty": {
                  "home": null,
                  "away": null
              }
          }
      },
      {
          "fixture": {
              "id": 1048926,
              "referee": "M. Fritz",
              "timezone": "UTC",
              "date": "2023-09-30T16:30:00+00:00",
              "timestamp": 1696091400,
              "periods": {
                  "first": 1696091400,
                  "second": 1696095000
              },
              "venue": {
                  "id": 738,
                  "name": "Red Bull Arena",
                  "city": "Leipzig"
              },
              "status": {
                  "long": "Match Finished",
                  "short": "FT",
                  "elapsed": 90
              }
          },
          "league": {
              "id": 78,
              "name": "Bundesliga",
              "country": "Germany",
              "logo": "https://media-4.api-sports.io/football/leagues/78.png",
              "flag": "https://media-4.api-sports.io/flags/de.svg",
              "season": 2023,
              "round": "Regular Season - 6"
          },
          "teams": {
              "home": {
                  "id": 173,
                  "name": "RB Leipzig",
                  "logo": "https://media-4.api-sports.io/football/teams/173.png",
                  "winner": null
              },
              "away": {
                  "id": 157,
                  "name": "Bayern Munich",
                  "logo": "https://media-4.api-sports.io/football/teams/157.png",
                  "winner": null
              }
          },
          "goals": {
              "home": 2,
              "away": 2
          },
          "score": {
              "halftime": {
                  "home": 2,
                  "away": 0
              },
              "fulltime": {
                  "home": 2,
                  "away": 2
              },
              "extratime": {
                  "home": null,
                  "away": null
              },
              "penalty": {
                  "home": null,
                  "away": null
              }
          }
      },
      {
          "fixture": {
              "id": 1048935,
              "referee": "R. Schröder",
              "timezone": "UTC",
              "date": "2023-10-08T15:30:00+00:00",
              "timestamp": 1696779000,
              "periods": {
                  "first": 1696779000,
                  "second": 1696782600
              },
              "venue": {
                  "id": 700,
                  "name": "Allianz Arena",
                  "city": "München"
              },
              "status": {
                  "long": "Match Finished",
                  "short": "FT",
                  "elapsed": 90
              }
          },
          "league": {
              "id": 78,
              "name": "Bundesliga",
              "country": "Germany",
              "logo": "https://media-4.api-sports.io/football/leagues/78.png",
              "flag": "https://media-4.api-sports.io/flags/de.svg",
              "season": 2023,
              "round": "Regular Season - 7"
          },
          "teams": {
              "home": {
                  "id": 157,
                  "name": "Bayern Munich",
                  "logo": "https://media-4.api-sports.io/football/teams/157.png",
                  "winner": true
              },
              "away": {
                  "id": 160,
                  "name": "SC Freiburg",
                  "logo": "https://media-4.api-sports.io/football/teams/160.png",
                  "winner": false
              }
          },
          "goals": {
              "home": 3,
              "away": 0
          },
          "score": {
              "halftime": {
                  "home": 2,
                  "away": 0
              },
              "fulltime": {
                  "home": 3,
                  "away": 0
              },
              "extratime": {
                  "home": null,
                  "away": null
              },
              "penalty": {
                  "home": null,
                  "away": null
              }
          }
      }
  ]
}

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
