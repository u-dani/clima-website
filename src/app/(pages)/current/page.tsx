import { requestGeocoding } from '@/request/requestGeocoding'
import { requestCurrentWeather } from '@/request/requestCurrentWeather'
import { WeatherSummaryCard } from '@/components/cards/WeatherSummaryCard'

import { WindIcon } from '@/components/icons/WindIcon'
import { MdWaterDrop } from 'react-icons/md'
import { WiWindDeg } from 'react-icons/wi'

import { LiaLocationArrowSolid } from 'react-icons/lia'

import { SunIcon } from '@/components/icons/SunIcon'
import { Card } from '@/components/cards/Card'

import { HotThermometerIcon } from '@/components/icons/HotThermometerIcon'
import { ColdThermometerIcon } from '@/components/icons/ColdThermometerIcon'
import { DoubleCloudIcon } from '@/components/icons/DoubleCloudIcon'

import { SunriseIcon } from '@/components/icons/SunriseIcon'
import { SunsetIcon } from '@/components/icons/SunsetIcon'

export default async function CurrentWeatherPage() {
    const geocodingData = await requestGeocoding({ city: 'Salgueiro' })
    const weatherData = await requestCurrentWeather({
        lat: geocodingData.lat,
        lon: geocodingData.lon,
    })

    let windDeg
    let classRotateWindDeg
    if (weatherData.wind.deg) {
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
    if (weatherData.clouds.all) {
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
            <WeatherSummaryCard
                city={geocodingData.name}
                state={geocodingData.state}
                description={weatherData.weather[0].description}
                iconCode={weatherData.weather[0].icon}
                temperature={weatherData.main.temp}
            />

            <div className='flex gap-6 flex-wrap'>
                <Card className='flex w-full gap-6 justify-between items-center sm:w-max'>
                    <div className='flex  flex-col gap-3'>
                        <span>Umidade</span>
                        <div className='text-4xl font-medium'>
                            <span>{weatherData.main.humidity}</span>
                            <span className='align-super text-2xl'>%</span>
                        </div>
                        <span className='text-sm'>
                            {weatherData.main.humidity > 50
                                ? '👍Normal'
                                : '⚠️Alerta'}
                        </span>
                    </div>

                    <MdWaterDrop className='text-5xl text-primary-light dark:text-primary-dark' />
                </Card>

                <Card className='flex w-full gap-6 justify-between items-center sm:w-max'>
                    <div className='flex  flex-col gap-3'>
                        <span>Sensação térmica</span>
                        <div className='text-4xl font-medium'>
                            <span>
                                {Math.round(weatherData.main.feels_like)}°
                            </span>
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

                <Card className='flex w-full gap-6 justify-between items-center sm:w-max text-center'>
                    <div className='flex  flex-col gap-3'>
                        <span>Visibilidade</span>
                        <div className='text-4xl font-medium'>
                            <span>{weatherData.visibility / 1000}</span>
                            <span className='align-middle text-2xl'>km</span>
                        </div>
                    </div>
                </Card>

                <Card className='flex w-full gap-6 justify-between items-center sm:w-max'>
                    <div className='flex  flex-col gap-3'>
                        <span>Ventos</span>
                        <div className='text-4xl font-medium'>
                            <span>
                                {(weatherData.wind.speed / 3.6).toFixed(1)}
                            </span>
                            <span className='align-middle text-2xl'>km/h</span>
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

                <Card className='flex w-full gap-6 justify-between items-center sm:w-max'>
                    <div className='flex  flex-col gap-3'>
                        <span>Nebulosidade</span>
                        <div className='text-4xl font-medium'>
                            <span>{weatherData.clouds.all}</span>
                            <span className='align-super text-2xl'>%</span>
                        </div>
                        <span className='text-sm'>{nebulosity}</span>
                    </div>

                    <div className='text-5xl text-primary-light dark:text-primary-dark'>
                        <DoubleCloudIcon />
                    </div>
                </Card>

                <Card className='flex w-full gap-6 justify-between items-center sm:w-max'>
                    <div className='flex flex-col gap-3'>
                        <span>Nascer e pôr do sol</span>
                        <div className='flex gap-2 text-xl font-medium'>
                            <span className='text-3xl text-primary-light dark:text-primary-dark'>
                                <SunriseIcon />
                            </span>
                            <span>
                                {new Date(
                                    weatherData.sys.sunrise * 1000
                                ).toLocaleTimeString([], {
                                    timeStyle: 'short',
                                })}
                            </span>
                        </div>

                        <div className='flex gap-2 text-xl font-medium'>
                            <span className='text-3xl text-primary-light dark:text-primary-dark'>
                                <SunsetIcon />
                            </span>
                            <span>
                                {new Date(
                                    weatherData.sys.sunset * 1000
                                ).toLocaleTimeString([], {
                                    timeStyle: 'short',
                                })}
                            </span>
                        </div>
                    </div>
                </Card>

                <Card className='flex w-full gap-6 justify-center items-center sm:w-max text-center'>
                    <div className='flex flex-col gap-3'>
                        <span>Pressão atmosférica</span>
                        <div className='text-4xl font-medium'>
                            <span>{weatherData.main.pressure}</span>
                            <span className='align-middle text-2xl'>mb</span>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    )
}
