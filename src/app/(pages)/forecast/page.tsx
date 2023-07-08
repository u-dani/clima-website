import { Card } from '@/components/cards/Card'
import { requestGeocoding } from '@/request/requestGeocoding'
import { requestWeatherForecast } from '@/request/requestWeatherForecast'
import { DAYS, ICONCODES } from '@/components/cards/WeatherSummaryCard'

export default async function WeatherForecastPage({
    searchParams,
}: {
    searchParams: { city: string; unit: string }
}) {
    const geocodingData = await requestGeocoding({
        city: searchParams.city ?? 'Brasília',
    })

    const weatherData = geocodingData
        ? await requestWeatherForecast({
              lat: geocodingData.lat,
              lon: geocodingData.lon,
          })
        : undefined

    // reduce, encaixa PERFEITAMENTE NO REDUCE, QUE DROGA :d

    function concat() {
        let weatherDataList
        weatherData?.forEach(data => {
            const date = new Date(data.dt * 1000).toLocaleDateString()
        })

        console.log(weatherDataList)
    }

    return (
        <main>
            {weatherData?.map(data => (
                <p key={data.dt}>{new Date(data.dt * 1000).toLocaleString()}</p>
            ))}

            {/* <Card>
                <p>
                    {DAYS[new Date(weatherDataList![0].dt * 1000).getDay()]},{' '}
                    {new Date(weatherDataList![0].dt * 1000).getDate()}
                </p>

                <div className='flex gap-2 text-2xl items-center'>
                    <div>
                        {ICONCODES[weatherDataList![0].weather[0].icon].icon}
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-medium'>
                            {Math.floor(weatherDataList![0].main.temp_max)}
                        </span>
                        <span className='font-extralight'>
                            {Math.floor(weatherDataList![0].main.temp_min)}
                        </span>
                    </div>
                </div>

                <p>{weatherDataList![0].weather[0].description}</p>
                <p>precipitação: {weatherDataList![0].pop * 100}%</p>
            </Card> */}
        </main>
    )
}
