interface Team {
    id: number
    name: string
    logo: string
}

interface All {
    win: string
    lose: string
    draw: string
    goals: Goals
    played: string
}

interface Goals {
    for: number
    against: number
}

export interface Standing {
    rank: number
    points: number
    team: Team
    all: All
}

interface League {
    league: {
        standings: Array<Array<Standing>>
    }
}

export default interface Standings {
    response: Array<League>
}