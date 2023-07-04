import { requestGeocoding } from '@/request/requestGeocoding'
import { requestCurrentWeather } from '@/request/requestCurrentWeather'

export default async function CurrentWeatherPage() {
    const geocodingData = await requestGeocoding({ city: 'Salgueiro' })
    const weatherData = await requestCurrentWeather({
        lat: geocodingData.lat,
        lon: geocodingData.lon,
    })

    return <main></main>
}
