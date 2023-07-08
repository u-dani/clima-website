import {
    APIKEY,
    IWeatherDataRequestParameters,
    IWeatherDataResponse,
} from './data'

interface IWeatherForecastRequestParameters extends IWeatherDataResponse {
    pop: number
}

export const requestWeatherForecast = async ({
    lat,
    lon,
    lang = 'pt_br',
    units = 'metric',
}: IWeatherDataRequestParameters): Promise<
    IWeatherForecastRequestParameters[]
> => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${APIKEY}`
    )

    const data = await res.json()
    console.log(data)

    return data.list
}
