import { requestGeocoding } from '@/request/requestGeocoding'
import { requestCurrentWeather } from '@/request/requestCurrentWeather'
import { WeatherSummaryCard } from '@/components/cards/WeatherSummaryCard'

export default async function CurrentWeatherPage() {
    const geocodingData = await requestGeocoding({ city: 'Salgueiro' })
    const weatherData = await requestCurrentWeather({
        lat: geocodingData.lat,
        lon: geocodingData.lon,
    })

    return (
        <main>
            <WeatherSummaryCard
                city={geocodingData.name}
                state={geocodingData.state}
                description={weatherData.weather[0].description}
                iconCode={weatherData.weather[0].icon}
                temperature={weatherData.main.temp}
            />
        </main>
    )
}
