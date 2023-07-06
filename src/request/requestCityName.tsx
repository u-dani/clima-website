import { APIKEY } from './data'

interface ICityNameRequest {
    lat: number
    lon: number
}

export const requestCityName = async ({ lat, lon }: ICityNameRequest) => {
    const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${APIKEY}`
    )

    const data = await res.json()
    return data[0].name
}
