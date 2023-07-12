import { requestGeocoding } from '@/request/requestGeocoding'
import { requestWeatherForecast } from '@/request/requestWeatherForecast'

export default async function WeatherForecastWithIntervalsPage({
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

    const weatherDataList: (typeof weatherData)[] = []
    let arr: typeof weatherData = []
    weatherData?.forEach(data => {
        const dataDate = new Date(data.dt * 1000).getDate()
        const arrDate =
            arr?.length !== 0 && arr
                ? new Date(arr[0].dt * 1000).getDate()
                : undefined

        if (dataDate === new Date().getDate()) {
            return
        }

        if (arrDate === undefined || arrDate === dataDate) {
            arr?.push(data)
            return
        }

        weatherDataList.push(arr)
        arr = [data]
    })
    weatherDataList.push(arr)

    return <main></main>
}
