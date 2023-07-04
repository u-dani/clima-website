import {
    APIKEY,
    IWeatherDataRequestParameters,
    IWeatherDataResponse,
} from './data'

export const requestCurrentWeather = async ({
    lat,
    lon,
    units = 'metric',
    lang = 'pt_br',
}: IWeatherDataRequestParameters): Promise<IWeatherDataResponse> => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${APIKEY}`
    )

    const data = await res.json()
    return data
}
