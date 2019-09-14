export interface IAirportInfo {
    name: string
    type: string
    municipality: string
    country: string
    updateAt: Date
}

export interface IResultInfo {
    weather: string
    temp_max: number
    temp_min: number
    speed: number
    directions: string[]
}
