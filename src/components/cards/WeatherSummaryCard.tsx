import Image, { StaticImageData } from 'next/image'

import clearSkyDay from 'public/weather/clear-sky-day.jpeg'
import clearSkyNight from 'public/weather/clear-sky-night.jpeg'
import fewCloudsDay from 'public/weather/few-clouds-day.jpeg'
import fewCloudsNight from 'public/weather/few-clouds-night.jpeg'
import scatteredCloudsDay from 'public/weather/scattered-clouds-day.jpeg'
import scatteredCloudsNight from 'public/weather/scattered-clouds-night.jpeg'
import brokenClouds from 'public/weather/broken-clouds.jpeg'
import rainDay from 'public/weather/rain-day.png'
import rainNight from 'public/weather/rain-night.jpeg'
import thunderstorm from 'public/weather/thunderstorm.png'
import snowDay from 'public/weather/snow-day.jpeg'
import snowNight from 'public/weather/snow-night.png'
import mistDay from 'public/weather/mist-day.jpeg'
import mistNight from 'public/weather/mist-night.png'

import { SunIcon } from '@/components/icons/SunIcon'
import { ClearNightIcon } from '@/components/icons/ClearNightIcon'
import { PartlyCloudDayIcon } from '@/components/icons/PartlyCloudDayIcon'
import { PartlyCloudNightIcon } from '@/components/icons/PartlyCloudNightIcon'
import { CloudIcon } from '@/components/icons/CloudIcon'
import { DoubleCloudIcon } from '@/components/icons/DoubleCloudIcon'
import { RainIcon } from '@/components/icons/RainIcon'
import { RainDayIcon } from '@/components/icons/RainDayIcon'
import { RainNightIcon } from '@/components/icons/RainNightIcon'
import { ThunderIcon } from '@/components/icons/ThunderIcon'
import { SnowIcon } from '@/components/icons/SnowIcon'
import { HazzyIcon } from '@/components/icons/HazzyIcon'

const DAYS = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
]

const ICONCODES: {
    [key: string]: {
        title: string
        image: StaticImageData
        icon: JSX.Element
    }
} = {
    '01d': {
        title: 'Céu Limpo',
        image: clearSkyDay,
        icon: <SunIcon />,
    },
    '01n': {
        title: 'Céu Limpo',
        image: clearSkyNight,
        icon: <ClearNightIcon />,
    },
    '02d': {
        title: 'Poucas nuvens',
        image: fewCloudsDay,
        icon: <PartlyCloudDayIcon />,
    },
    '02n': {
        title: 'Poucas nuvens',
        image: fewCloudsNight,
        icon: <PartlyCloudNightIcon />,
    },
    '03d': {
        title: 'Nuvens dispersas',
        image: scatteredCloudsDay,
        icon: <CloudIcon />,
    },
    '03n': {
        title: 'Nuvens dispersas',
        image: scatteredCloudsNight,
        icon: <CloudIcon />,
    },
    '04d': {
        title: 'Nuvens escuras',
        image: brokenClouds,
        icon: <DoubleCloudIcon />,
    },
    '04n': {
        title: 'Nuvens escuras',
        image: brokenClouds,
        icon: <DoubleCloudIcon />,
    },
    '09d': {
        title: 'Garoa, chuvisco',
        image: rainDay,
        icon: <RainIcon />,
    },
    '09n': {
        title: 'Garoa, chuvisco',
        image: rainNight,
        icon: <RainIcon />,
    },
    '10d': {
        title: 'Dia Chuvoso',
        image: rainDay,
        icon: <RainDayIcon />,
    },
    '10n': {
        title: 'Noite Chuvosa',
        image: rainNight,
        icon: <RainNightIcon />,
    },
    '11d': {
        title: 'Trovoada',
        image: thunderstorm,
        icon: <ThunderIcon />,
    },
    '11n': {
        title: 'Trovoada',
        image: thunderstorm,
        icon: <ThunderIcon />,
    },
    '13d': {
        title: 'Neve',
        image: snowDay,
        icon: <SnowIcon />,
    },
    '13n': {
        title: 'Neve',
        image: snowNight,
        icon: <SnowIcon />,
    },
    '50d': {
        title: 'Névoa',
        image: mistDay,
        icon: <HazzyIcon />,
    },
    '50n': {
        title: 'Névoa',
        image: mistNight,
        icon: <HazzyIcon />,
    },
}

interface IWeatherSummaryCardProps {
    city: string
    state: string
    temperature: number
    description: string
    iconCode: string
}

export const WeatherSummaryCard = ({
    city,
    state,
    temperature,
    description,
    iconCode,
}: IWeatherSummaryCardProps) => {
    return (
        <div className='rounded-2xl p-6 border flex items-center justify-between gap-4 w-full overflow-hidden relative text-white lg:w-full lg:h-full'>
            <Image
                src={ICONCODES[iconCode].image}
                alt={ICONCODES[iconCode].title}
                fill
                style={{ objectFit: 'cover' }}
                className='-z-50'
            />

            <span className='absolute top-0 left-0 bg-black w-screen h-screen opacity-40 -z-50'></span>

            <div className='flex flex-col gap-6 sm:flex-row sm:justify-between w-full lg:flex-col justify-between h-full lg:gap-10'>
                <span className='text-base lg:text-lg max-lg:hidden'>
                    {`${city}, ${state.substring(0, 2).toUpperCase()}`}
                </span>

                <div className='flex flex-col gap-6'>
                    <span className='text-base lg:hidden'>
                        {`${city}, ${state.substring(0, 2).toUpperCase()}`}
                    </span>

                    <div className='flex flex-col lg:gap-2'>
                        <div className='hidden text-3xl lg:text-4xl sm:block'>
                            {ICONCODES[iconCode].icon}
                        </div>

                        <span className='text-4xl font-bold lg:text-6xl'>
                            {Math.round(temperature)}º
                        </span>

                        <span className='text-base lg:text-lg'>
                            {DAYS[new Date().getDay()]},{`${' '}`}
                            {new Date().toLocaleTimeString([], {
                                timeStyle: 'short',
                            })}
                        </span>
                    </div>
                </div>

                <div className='flex flex-col text-sm sm:self-end sm:text-end sm:text-base lg:self-start lg:text-start capitalize'>
                    <span>{ICONCODES[iconCode].title}</span>
                    <span>{description}</span>
                </div>
            </div>

            <div className='text-7xl block sm:hidden'>
                {ICONCODES[iconCode].icon}
            </div>
        </div>
    )
}
