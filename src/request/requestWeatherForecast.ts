import {
    APIKEY,
    IWeatherDataRequestParameters,
    IWeatherDataResponse,
} from './data'

export interface IWeatherForecastRequestResponse extends IWeatherDataResponse {
    pop: number
}

export const requestWeatherForecast = async ({
    lat,
    lon,
    lang = 'pt_br',
    units = 'metric',
}: IWeatherDataRequestParameters): Promise<
    IWeatherForecastRequestResponse[]
> => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${APIKEY}`,
        { cache: 'no-cache' }
    )

    const data = await res.json()
    return data.list
}
