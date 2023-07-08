import { requestGeocoding } from '@/request/requestGeocoding'
import { requestWeatherForecast } from '@/request/requestWeatherForecast'

export default async function WeatherForecastPage() {
    const geocodingData = await requestGeocoding({ city: 'Salgueiro' })

    const weatherDataList = geocodingData
        ? await requestWeatherForecast({
              lat: geocodingData.lat,
              lon: geocodingData.lon,
          })
        : undefined

    return <main></main>
}
