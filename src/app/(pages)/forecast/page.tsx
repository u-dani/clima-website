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

    const weatherDataList: (typeof weatherData)[] = []
    let arr: typeof weatherData = []
    weatherData?.forEach((data, index) => {
        const dataDate = new Date(data.dt * 1000).toLocaleDateString()
        const arrDate =
            arr?.length !== 0 && arr
                ? new Date(arr[0].dt * 1000).toLocaleDateString()
                : undefined

        if (dataDate === new Date().toLocaleDateString()) {
            return
        } else if (arrDate === undefined || arrDate === dataDate) {
            arr?.push(data)
            return
        }

        weatherDataList.push(arr)
        arr = []
    })
    weatherDataList.push(arr)

    // // const arr = [1, 2, 2, 3, 3, 4, 4, 4, 4]
    // const occurrences = arr.reduce((acc, curr) => {
    //     return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
    // }, {})
    // console.log(occurrences) // {1: 1, 2: 2, 3: 2, 4: 4}

    const icons = weatherDataList.map(arr =>
        arr?.map(data => data.weather[0].icon)
    )

    return (
        <main>
            <div className='flex flex-col gap-6'>
                {weatherDataList.map(arr => (
                    <div key={JSON.stringify(arr)} className='m-2'>
                        {arr?.map(data => (
                            <div key={data.dt}>
                                <p>
                                    {new Date(data.dt * 1000).toLocaleString()}
                                </p>
                                <p>{data.weather[0].icon}</p>
                            </div>
                        ))}
                    </div>
                ))}
                {weatherDataList.map(arr => (
                    <Card key={arr![0].dt}>
                        <span>
                            {DAYS[new Date(arr![0].dt * 1000).getDay()]},{' '}
                            {new Date(arr![0].dt * 1000).getDate()}
                        </span>

                        <div></div>
                    </Card>
                ))}
            </div>
        </main>
    )
}
