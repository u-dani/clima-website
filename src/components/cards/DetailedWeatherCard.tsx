'use client'
import { useState } from 'react'
import { Card } from './Card'

import { IWeatherForecastRequestResponse } from '@/request/requestWeatherForecast'
import { ICONCODES } from './WeatherSummaryCard'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { DoubleCloudIcon } from '../icons/DoubleCloudIcon'
import { ColdThermometerIcon } from '../icons/ColdThermometerIcon'
import { HotThermometerIcon } from '../icons/HotThermometerIcon'
import { DropsIcon } from '../icons/DropsIcon'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { WindIcon } from '../icons/WindIcon'

export const DetailedWeatherCard = ({
    dt,
    main,
    weather,
    wind,
    pop,
    clouds,
}: IWeatherForecastRequestResponse) => {
    const [show, setShow] = useState(false)

    return (
        <div onClick={() => setShow(state => !state)}>
            <Card className='flex flex-col gap-6 tracking-wide pb-5 cursor-pointer'>
                <div className='flex tracking-wider justify-between items-center'>
                    <span>
                        {new Date(dt * 1000).toLocaleTimeString('pt-br', {
                            timeStyle: 'short',
                        })}
                    </span>
                    <MdKeyboardArrowDown
                        className={`text-2xl cursor-pointer hover:opacity-70 duration-200 sm:hidden ${
                            show && 'rotate-180'
                        }`}
                    />
                </div>

                <div className='flex items-end gap-4 justify-between sm:flex-col sm:items-start'>
                    <div className='flex gap-4 items-center text-4xl'>
                        <div className='text-5xl'>
                            {ICONCODES[weather[0].icon].icon}
                        </div>
                        <span>{Math.floor(main.temp)}</span>
                    </div>

                    <span>{ICONCODES[weather[0].icon].title}</span>
                </div>

                <div
                    className={`mt-2 grid grid-cols-7 gap-4 ${
                        !show && 'hidden'
                    } sm:grid`}>
                    <div className='col-span-3 flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <div className='text-4xl'>
                                <DoubleCloudIcon outline />
                            </div>

                            <div className='flex flex-col truncate'>
                                <span className='text-sm truncate'>
                                    Nublado
                                </span>
                                <span>
                                    {clouds.all}
                                    <span className='text-sm'>%</span>
                                </span>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='text-4xl'>
                                {main.feels_like <= 20 ? (
                                    <ColdThermometerIcon />
                                ) : (
                                    <HotThermometerIcon />
                                )}
                            </div>

                            <div className='flex flex-col truncate'>
                                <span className='text-sm truncate'>
                                    Sensação térmica
                                </span>
                                <span>
                                    {Math.floor(main.feels_like)}
                                    <span>&deg;</span>
                                </span>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='text-4xl'>
                                <DropsIcon outline />
                            </div>

                            <div className='flex flex-col truncate'>
                                <span className='text-sm truncate'>
                                    Chance de Chuva
                                </span>
                                <span>
                                    {Math.round(pop)}
                                    <span className='text-sm'>%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <span className='border-l text-secondary-light'></span>
                    </div>

                    <div className='col-span-3 flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <div className='text-4xl'>
                                <WindIcon />
                            </div>

                            <div className='flex flex-col truncate'>
                                <span className='text-sm truncate'>Ventos</span>
                                <span>
                                    {wind.speed.toFixed(1)}
                                    <span className='text-sm'>km/h</span>
                                </span>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='text-4xl'>
                                <MdOutlineWaterDrop />
                            </div>

                            <div className='flex flex-col truncate'>
                                <span className='text-sm truncate'>
                                    Umidade
                                </span>
                                <span>
                                    {main.humidity}
                                    <span className='text-sm'>%</span>
                                </span>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='text-4xl opacity-0'>
                                <DoubleCloudIcon outline />
                            </div>
                            <div className='flex flex-col truncate'>
                                <span className='text-sm truncate'>
                                    Pressão
                                </span>
                                <span>
                                    {main.pressure}
                                    <span className='text-sm'>hPa</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
