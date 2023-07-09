export const APIKEY = 'aca21d5a1ed5507352f4055360f82207'

export interface IWeatherDataRequestParameters {
    lat: number
    lon: number
    units?: string
    lang?: string
}

export interface IWeatherDataResponse {
    dt: number
    clouds: { all: number }
    timezone: number
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    sys: {
        sunrise: number
        sunset: number
    }
    visibility: number
    weather: {
        description: string
        icon: string
        main: string
    }[]
    wind: {
        deg: number
        speed: number
    }
}
