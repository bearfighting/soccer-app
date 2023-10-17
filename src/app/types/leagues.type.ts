interface Season {
    year: number
    current: boolean
}

interface Seasons {
    seasons: Array<Season>
}

export default interface Leagues {
    response: Array<Seasons>
}