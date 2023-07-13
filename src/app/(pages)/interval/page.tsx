import { CardSlides } from '@/components/CardSlides'
import { DetailedWeatherCard } from '@/components/cards/DetailedWeatherCard'
import { DAYS } from '@/components/cards/WeatherSummaryCard'
import { requestGeocoding } from '@/request/requestGeocoding'
import { requestWeatherForecast } from '@/request/requestWeatherForecast'
import Link from 'next/link'

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

    return (
        <main className='flex flex-col gap-10'>
            <nav className='flex gap-4 sm:px-4'>
                {weatherDataList.map(arr => (
                    <Link
                        key={arr![0].dt}
                        href={`#${arr![0].dt.toString()}`}
                        className='rounded-lg bg-secondary-light dark:bg-secondary-dark px-4 py-2 truncate'>
                        <span className='truncate tracking-wide'>
                            {`${DAYS[
                                new Date(arr![0].dt * 1000).getDay()
                            ].substring(0, 3)}, ${new Date(
                                arr![0].dt * 1000
                            ).getDate()}`}
                        </span>
                    </Link>
                ))}
            </nav>

            {weatherDataList.map(arr => (
                <section
                    id={arr![0].dt.toString()}
                    key={JSON.stringify(arr)}
                    className='flex flex-col gap-10 pt-10'>
                    <header className='sm:px-4'>
                        <h2 className='text-2xl tracking-wide sm:px-6 px-4 py-px border-l-4 border-primary-light dark:border-primary-dark'>
                            {DAYS[new Date(arr![0].dt * 1000).getDay()]},{' '}
                            {new Date(arr![0].dt * 1000).getDate()}
                        </h2>
                    </header>

                    <CardSlides
                        id={new Date(arr![0].dt * 1000).getDate()}
                        className='max-sm:hidden'>
                        {arr?.map(data => (
                            <div key={data.dt}>
                                <DetailedWeatherCard {...data} />
                            </div>
                        ))}
                    </CardSlides>

                    <div className='flex flex-col gap-4 sm:hidden sm:gap-6 sm:flex-row'>
                        {arr?.map(data => (
                            <DetailedWeatherCard key={data.dt} {...data} />
                        ))}
                    </div>
                </section>
            ))}
        </main>
    )
}
