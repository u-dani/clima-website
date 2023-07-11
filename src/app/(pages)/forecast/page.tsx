import { Card } from '@/components/cards/Card'
import { requestGeocoding } from '@/request/requestGeocoding'
import { requestWeatherForecast } from '@/request/requestWeatherForecast'
import { DAYS, ICONCODES } from '@/components/cards/WeatherSummaryCard'
import { mostFrequentItem } from '@/functions/mostFrequentItem'
import { DropsIcon } from '@/components/icons/DropsIcon'
import { LineChart } from '@/components/LineChart'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'
import { getStateAcronym } from '@/functions/getStateAcronym'
import { Title } from '@/components/Title'

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

    weatherDataList.map(arr => {
        const mostFrequentIcon = mostFrequentItem(
            arr!.map(data => data.weather[0].icon)
        )

        return (arr![0].weather[0].icon =
            mostFrequentIcon.items.find(item => item.includes('d')) ??
            mostFrequentIcon.items[0])
    })

    const lineChartData: any[] = [['x', 'máxima', 'mínima']]
    weatherDataList.forEach(arr => {
        const weekDay = DAYS[new Date(arr![0].dt * 1000).getDay()]
        const maxTemp =
            searchParams.unit === 'imperial'
                ? Math.floor(
                      Math.max(...arr!.map(data => data.main.temp * 1.8 + 32))
                  )
                : Math.floor(Math.max(...arr!.map(data => data.main.temp)))
        const minTemp =
            searchParams.unit === 'imperial'
                ? Math.floor(
                      Math.min(...arr!.map(data => data.main.temp * 1.8 + 32))
                  )
                : Math.floor(Math.min(...arr!.map(data => data.main.temp)))
        lineChartData.push([weekDay, maxTemp, minTemp])
    })

    return (
        <main className='flex flex-col gap-10'>
            <header className='flex flex-col gap-6 sm:hidden'>
                <Title>Próximos Dias</Title>

                <nav>
                    <Link
                        href='#graphic'
                        className='flex gap-1 items-end border px-3 py-2 rounded-lg w-max hover:opacity-80'>
                        Rolar até o Gráfico
                        <MdKeyboardArrowDown className='text-lg animate-bounce' />
                    </Link>
                </nav>
            </header>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5'>
                {weatherDataList.map(arr => (
                    <Card
                        key={arr![0].dt}
                        className='flex w-full h-full flex-col gap-4'>
                        <span className='truncate'>
                            {DAYS[new Date(arr![0].dt * 1000).getDay()]},{' '}
                            {new Date(arr![0].dt * 1000).getDate()}
                        </span>

                        <div className='flex justify-between items-end gap-4 md:flex-col md:items-start'>
                            <div className='flex gap-6 items-center flex-wrap'>
                                <div className='text-5xl text-primary-light dark:text-primary-dark'>
                                    {ICONCODES[arr![0].weather[0].icon].icon}
                                </div>

                                <div className='text-3xl flex flex-col'>
                                    <span className='font-medium'>
                                        {searchParams.unit === 'imperial'
                                            ? Math.floor(
                                                  Math.max(
                                                      ...arr!.map(
                                                          data =>
                                                              data.main.temp *
                                                                  1.8 +
                                                              32
                                                      )
                                                  )
                                              )
                                            : Math.floor(
                                                  Math.max(
                                                      ...arr!.map(
                                                          data => data.main.temp
                                                      )
                                                  )
                                              )}
                                        °
                                    </span>
                                    <span className='font-light'>
                                        {searchParams.unit === 'imperial'
                                            ? Math.floor(
                                                  Math.min(
                                                      ...arr!.map(
                                                          data =>
                                                              data.main.temp *
                                                                  1.8 +
                                                              32
                                                      )
                                                  )
                                              )
                                            : Math.floor(
                                                  Math.min(
                                                      ...arr!.map(
                                                          data => data.main.temp
                                                      )
                                                  )
                                              )}
                                        °
                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col items-end md:items-start'>
                                <div>
                                    {ICONCODES[arr![0].weather[0].icon].title}
                                </div>
                                <div
                                    className='flex items-center gap-1'
                                    title='Chance de chuva'>
                                    <div className='text-xl'>
                                        <DropsIcon />
                                    </div>
                                    {Math.floor(
                                        Math.max(
                                            ...arr!.map(data => data.pop * 100)
                                        )
                                    )}
                                    %
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div id='graphic' className='max-w-[800px] flex flex-col gap-6'>
                <span className='text-xl font-normal tracking-wide'>
                    Temperatura em {geocodingData?.name}
                    {geocodingData?.state &&
                        `, ${getStateAcronym(geocodingData?.state)}`}
                </span>
                <LineChart
                    data={lineChartData}
                    options={{
                        hAxis: {
                            title: 'TEMPO (HORAS)',
                        },
                        vAxis: {
                            title: `TEMPERATURA ${
                                searchParams.unit === 'imperial' ? '(F)' : '(C)'
                            }`,
                        },
                        curveType: 'function',
                        backgroundColor: '#f5f5f5',
                        colors: ['orangered', 'steelblue'],
                    }}
                />
            </div>
        </main>
    )
}
