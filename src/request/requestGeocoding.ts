import { APIKEY } from './data'

interface IGeocodingRequestParameters {
    city: string
}

export interface IGeocodingRequestResponse {
    lat: number
    lon: number
    name: string
    state: string
}

export const requestGeocoding = async ({
    city,
}: IGeocodingRequestParameters): Promise<IGeocodingRequestResponse> => {
    const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`
    )

    const data = await res.json()
    return data[0]
}