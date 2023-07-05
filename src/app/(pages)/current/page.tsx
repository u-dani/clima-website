import { requestGeocoding } from '@/request/requestGeocoding'
import { requestCurrentWeather } from '@/request/requestCurrentWeather'
import { BsFillSunFill } from 'react-icons/bs'
import Image from 'next/image'

import clearSkyDay from 'public/weather/clear-sky-day.jpeg'
import clearSkyNight from 'public/weather/clear-sky-night.jpeg'
import fewCloudsDay from 'public/weather/few-clouds-day.jpeg'
import fewCloudsNight from 'public/weather/few-clouds-night.jpeg'
import scatteredCloudsDay from 'public/weather/scattered-clouds-day.jpeg'
import scatteredCloudsNight from 'public/weather/scattered-clouds-night.jpeg'
import brokenClouds from 'public/weather/broken-clouds.jpeg'
import rainDay from 'public/weather/rain-day.jpeg'
import rainNight from 'public/weather/rain-night.jpeg'
import thunderstorm from 'public/weather/thunderstorm.png'
import snowDay from 'public/weather/snow-day.jpeg'
import snowNight from 'public/weather/snow-night.jpeg'
import mistDay from 'public/weather/mist-day.jpeg'
import mistNight from 'public/weather/mist-night.jpeg'

export default async function CurrentWeatherPage() {
    const geocodingData = await requestGeocoding({ city: 'Salgueiro' })
    const weatherData = await requestCurrentWeather({
        lat: geocodingData.lat,
        lon: geocodingData.lon,
    })

    const days = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
    ]

    const mainWeatherConditions: { [key: string]: { pt: string } } = {
        Thunderstorm: {
            pt: 'Trovoada',
        },
        Drizzle: {
            pt: 'Garoa',
        },
        Rain: {
            pt: 'Chuva',
        },
        Snow: {
            pt: 'Neve',
        },
        Clear: {
            pt: 'Limpo',
        },
        Clouds: {
            pt: 'Nuvens',
        },
        Mist: {
            pt: 'Névoa',
        },
    }

    const iconCodes = {
        '01d': {
            title: 'Céu Limpo',
            image: clearSkyDay,
            icon: '',
        },
        '01n': {
            title: 'Céu Limpo',
            image: clearSkyNight,
            icon: '',
        },
        '02d': {
            title: 'Poucas nuvens',
            image: fewCloudsDay,
            icon: '',
        },
        '02n': {
            title: 'Poucas nuvens',
            image: fewCloudsNight,
            icon: '',
        },
        '03d': {
            title: 'Nuvens dispersas',
            image: scatteredCloudsDay,
            icon: '',
        },
        '03n': {
            title: 'Nuvens dispersas',
            image: scatteredCloudsNight,
            icon: '',
        },
        '04d': {
            title: 'Nuvens escuras',
            image: brokenClouds,
            icon: '',
        },
        '04n': {
            title: 'Nuvens escuras',
            image: brokenClouds,
            icon: '',
        },
        '09d': {
            title: 'Garoa, chuvisco',
            image: rainDay,
            icon: '',
        },
        '09n': {
            title: 'Garoa, chuvisco',
            image: rainNight,
            icon: '',
        },
        '10d': {
            title: 'Chuva',
            image: rainDay,
            icon: '',
        },
        '10n': {
            title: 'Chuva',
            image: rainNight,
            icon: '',
        },
        '11d': {
            title: 'Trovoada',
            image: thunderstorm,
            icon: '',
        },
        '11n': {
            title: 'Trovoada',
            image: thunderstorm,
            icon: '',
        },
        '13d': {
            title: 'Neve',
            image: snowDay,
            icon: '',
        },
        '13n': {
            title: 'Neve',
            image: snowNight,
            icon: '',
        },
        '50d': {
            title: 'Névoa',
            image: mistDay,
            icon: '',
        },
        '50n': {
            title: 'Névoa',
            image: mistNight,
            icon: '',
        },
    }

    return (
        <main>
            <div className='rounded-2xl p-8 border flex items-center justify-between gap-4 w-full overflow-hidden relative'>
                <Image
                    src={clearSkyDay}
                    alt='thunder'
                    fill
                    style={{ objectFit: 'cover' }}
                    className='-z-50'
                />

                <span className='absolute top-0 left-0 bg-black w-screen h-screen opacity-40 -z-50'></span>

                <div className='flex flex-col gap-6'>
                    <span className='text-sm'>
                        {`${geocodingData.name}, ${geocodingData.state
                            .substring(0, 2)
                            .toUpperCase()}`}
                    </span>

                    <div className='flex flex-col'>
                        <span className='text-4xl font-bold'>
                            {Math.round(weatherData.main.temp)}º
                        </span>
                        <span className='text-base'>
                            {days[new Date().getDay()]},{`${' '}`}
                            {new Date().toLocaleTimeString([], {
                                timeStyle: 'short',
                            })}
                        </span>
                    </div>

                    <div className='flex flex-col text-sm'>
                        <span>
                            {mainWeatherConditions[weatherData.weather[0].main]
                                .pt ?? mainWeatherConditions.Mist.pt}
                        </span>
                        <span>{weatherData.weather[0].description}</span>
                    </div>
                </div>

                <BsFillSunFill className='text-7xl' />
            </div>
        </main>
    )
}
