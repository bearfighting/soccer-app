interface Leagues {
    [index: string]: number
}

interface Enviroment {
    production: boolean,
    baseURL: string,
    apiKey: string,
    apiHost: string,
    leagueIds: Leagues
}

export const environment: Enviroment = {
    production: false,
    baseURL: "https://v3.football.api-sports.io",
    apiKey: "f1adab7fd2417930eca7b01e01590a1b",
    apiHost: "v3.football.api-sports.io",
    leagueIds: {
        england: 39,
        spain: 140,
        france: 61,
        germany: 78,
        italy: 135
    }
}