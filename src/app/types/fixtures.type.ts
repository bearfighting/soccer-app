// "teams": {
//     "home": {
//         "id": 162,
//         "name": "Werder Bremen",
//         "logo": "https://media-4.api-sports.io/football/teams/162.png",
//         "winner": false
//     },
//     "away": {
//         "id": 157,
//         "name": "Bayern Munich",
//         "logo": "https://media-4.api-sports.io/football/teams/157.png",
//         "winner": true
//     }
// },
// "goals": {
//     "home": 0,
//     "away": 4
// },

interface Team {
    name: string
    logo: string
}

type TeamType = 'home' | 'away'

type Teams = {
    [index in TeamType]: Team
}

type Goals = {
    [index in TeamType]: number
}

export default interface Fixture {
    teams: Teams
    goals: Goals
}

export interface Response {
    response: Fixture[]
}
