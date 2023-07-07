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
}: IGeocodingRequestParameters): Promise<
    IGeocodingRequestResponse | undefined
> => {
    const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`
    )

    const data = await res.json()

    if (data[0] === undefined) {
        return undefined
    }

    if (data[0].state === 'Federal District') {
        data[0].state = 'Distrito Federal'
    } else if (data[0].state === 'Rio de Janeiro') {
        data[0].state = 'Rio Janeiro'
    }

    return data[0]
}
