import { requestGeocoding } from '@/request/requestGeocoding'
import { requestCurrentWeather } from '@/request/requestCurrentWeather'

import { WeatherSummaryCard } from '@/components/cards/WeatherSummaryCard'
import { Card } from '@/components/cards/Card'
import { CityNotFound } from '@/components/CityNotFound'

import { WindIcon } from '@/components/icons/WindIcon'
import { MdWaterDrop } from 'react-icons/md'
import { LiaLocationArrowSolid } from 'react-icons/lia'
import { HotThermometerIcon } from '@/components/icons/HotThermometerIcon'
import { ColdThermometerIcon } from '@/components/icons/ColdThermometerIcon'
import { DoubleCloudIcon } from '@/components/icons/DoubleCloudIcon'
import { SunriseIcon } from '@/components/icons/SunriseIcon'
import { SunsetIcon } from '@/components/icons/SunsetIcon'

export default async function CurrentWeatherPage({
    searchParams,
}: {
    searchParams: { city: string; unit: string }
}) {
    const geocodingData = await requestGeocoding({
        city: searchParams.city || 'Brasília',
    })
    const weatherData = geocodingData
        ? await requestCurrentWeather({
              lat: geocodingData?.lat,
              lon: geocodingData?.lon,
          })
        : undefined

    let windDeg
    let classRotateWindDeg
    if (weatherData?.wind.deg) {
        classRotateWindDeg = 'rotate-[' + weatherData.wind.deg + 'deg]'
        if (weatherData.wind.deg < 22.6) {
            windDeg = 'NNE'
        } else if (weatherData.wind.deg < 67.6) {
            windDeg = 'ENE'
        } else if (weatherData.wind.deg < 112.6) {
            windDeg = 'ESE'
        } else if (weatherData.wind.deg < 157.6) {
            windDeg = 'SSE'
        } else if (weatherData.wind.deg < 202.6) {
            windDeg = 'SSO'
        } else if (weatherData.wind.deg < 247.6) {
            windDeg = 'OSO'
        } else if (weatherData.wind.deg < 292.6) {
            windDeg = 'ONO'
        } else {
            windDeg = 'NNO'
        }
    }

    let nebulosity
    if (weatherData?.clouds.all) {
        if (weatherData.clouds.all < 21) {
            nebulosity = 'Céu limpo'
        } else if (weatherData.clouds.all < 41) {
            nebulosity = 'Quase sem nuvens'
        } else if (weatherData.clouds.all < 61) {
            nebulosity = 'Parcialmente nublado'
        } else {
            nebulosity = 'Nublado'
        }
    }

    return (
        <main>
            {geocodingData && weatherData ? (
                <div className='flex flex-col gap-6 mb-6 lg:flex-row lg:gap-8'>
                    <div className='lg:w-1/4'>
                        <WeatherSummaryCard
                            city={geocodingData.name}
                            state={geocodingData.state}
                            description={weatherData.weather[0].description}
                            iconCode={weatherData.weather[0].icon}
                            temperature={
                                searchParams.unit === 'imperial'
                                    ? weatherData.main.temp * 1.8 + 32
                                    : weatherData.main.temp
                            }
                        />
                    </div>

                    <div className='grid auto-rows-fr gap-4 sm:grid-cols-2 md:grid-cols-3 lg:w-3/4'>
                        <Card className='flex h-full w-full gap-6 justify-between items-center'>
                            <div className='flex  flex-col gap-3'>
                                <span>Umidade</span>
                                <div className='text-4xl font-medium'>
                                    <span>{weatherData.main.humidity}</span>
                                    <span className='align-super text-2xl'>
                                        %
                                    </span>
                                </div>
                                <span className='text-sm'>
                                    {weatherData.main.humidity > 50
                                        ? '👍Normal'
                                        : '⚠️Alerta'}
                                </span>
                            </div>

                            <MdWaterDrop className='text-5xl text-primary-light dark:text-primary-dark' />
                        </Card>

                        <Card className='flex h-full w-full gap-6 justify-between items-center'>
                            <div className='flex  flex-col gap-3'>
                                <span>Sensação térmica</span>
                                <div className='text-4xl font-medium'>
                                    {searchParams.unit === 'imperial' ? (
                                        <span>
                                            {Math.floor(
                                                weatherData.main.feels_like *
                                                    1.8 +
                                                    32
                                            )}
                                            °
                                        </span>
                                    ) : (
                                        <span>
                                            {Math.floor(
                                                weatherData.main.feels_like
                                            )}
                                            °
                                        </span>
                                    )}
                                </div>
                                <span className='text-sm'>
                                    {weatherData.main.temp > 20 &&
                                        weatherData.main.temp < 25 &&
                                        '👍Normal'}
                                    {weatherData.main.temp >= 25 && '🥵Quente'}
                                    {weatherData.main.temp <= 20 && '🥶Frio'}
                                </span>
                            </div>

                            <div className='text-5xl text-primary-light dark:text-primary-dark'>
                                {weatherData.main.temp <= 20 ? (
                                    <ColdThermometerIcon />
                                ) : (
                                    <HotThermometerIcon />
                                )}
                            </div>
                        </Card>

                        <Card className='flex h-full w-full gap-6 justify-between items-center'>
                            <div className='flex  flex-col gap-3'>
                                <span>Visibilidade</span>
                                <div className='text-4xl font-medium'>
                                    <span>{weatherData.visibility / 1000}</span>
                                    <span className='align-middle text-2xl'>
                                        km
                                    </span>
                                </div>
                            </div>
                        </Card>

                        <Card className='flex h-full w-full gap-6 justify-between items-center'>
                            <div className='flex  flex-col gap-3'>
                                <span>Ventos</span>
                                <div className='text-4xl font-medium'>
                                    <span>
                                        {(weatherData.wind.speed / 3.6).toFixed(
                                            1
                                        )}
                                    </span>
                                    <span className='align-middle text-2xl'>
                                        km/h
                                    </span>
                                </div>
                                <div className='text-sm flex items-center font-medium'>
                                    <span>
                                        <LiaLocationArrowSolid
                                            className={`text-lg transform ${classRotateWindDeg}`}
                                        />
                                    </span>
                                    <span>{windDeg}</span>
                                </div>
                            </div>

                            <div className='text-5xl text-primary-light dark:text-primary-dark'>
                                <WindIcon />
                            </div>
                        </Card>

                        <Card className='flex h-full w-full gap-6 justify-between items-center'>
                            <div className='flex  flex-col gap-3'>
                                <span>Nebulosidade</span>
                                <div className='text-4xl font-medium'>
                                    <span>{weatherData.clouds.all}</span>
                                    <span className='align-super text-2xl'>
                                        %
                                    </span>
                                </div>
                                <span className='text-sm'>{nebulosity}</span>
                            </div>

                            <div className='text-5xl text-primary-light dark:text-primary-dark'>
                                <DoubleCloudIcon />
                            </div>
                        </Card>

                        <Card className='flex h-full w-full gap-6 justify-between items-center'>
                            <div className='flex flex-col gap-3'>
                                <span>Nascer e pôr do sol</span>
                                <div className='flex gap-2 text-xl font-medium'>
                                    <span className='text-3xl text-primary-light dark:text-primary-dark'>
                                        <SunriseIcon />
                                    </span>
                                    <span>
                                        {new Date(
                                            weatherData.sys.sunrise * 1000 +
                                                weatherData.timezone * 1000
                                        )
                                            .getUTCHours()
                                            .toString()
                                            .padStart(2, '0')}
                                        :
                                        {new Date(
                                            weatherData.sys.sunrise * 1000 +
                                                weatherData.timezone * 1000
                                        )
                                            .getUTCMinutes()
                                            .toString()
                                            .padStart(2, '0')}
                                    </span>
                                </div>

                                <div className='flex gap-2 text-xl font-medium'>
                                    <span className='text-3xl text-primary-light dark:text-primary-dark'>
                                        <SunsetIcon />
                                    </span>
                                    <span>
                                        {new Date(
                                            weatherData.sys.sunset * 1000 +
                                                weatherData.timezone * 1000
                                        )
                                            .getUTCHours()
                                            .toString()
                                            .padStart(2, '0')}
                                        :
                                        {new Date(
                                            weatherData.sys.sunset * 1000 +
                                                weatherData.timezone * 1000
                                        )
                                            .getUTCMinutes()
                                            .toString()
                                            .padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        </Card>

                        <Card className='flex h-full w-full gap-6 items-center'>
                            <div className='flex flex-col gap-3'>
                                <span>Pressão atmosférica</span>
                                <div className='text-4xl font-medium'>
                                    <span>{weatherData.main.pressure}</span>
                                    <span className='align-middle text-2xl'>
                                        mb
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            ) : (
                <CityNotFound />
            )}
        </main>
    )
}
