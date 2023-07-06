'use client'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import { requestCityName } from '@/request/requestCityName'
import { useEffect, useState } from 'react'

import catPlease from 'public/cats/cat-please.gif'
import catHappy from 'public/cats/cat-happy.gif'
import catSad from 'public/cats/cat-sad.gif'

const CATS: {
    [key: string]: { title: string; gif: StaticImageData; alt: string }
} = {
    please: {
        title: 'Permitirias a localização???',
        gif: catPlease,
        alt: 'Gato pedindo por favor',
    },
    happy: {
        title: '... Buscando sua cidade ^^',
        gif: catHappy,
        alt: 'Gato feliz',
    },
    sad: {
        title: '... Redirecionando :(',
        gif: catSad,
        alt: 'Gato triste',
    },
}

export default function Home() {
    const { push } = useRouter()
    const [content, setContent] = useState(CATS.please)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async position => {
                setContent(CATS.happy)
                const cityName = await requestCityName({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                })
                push(`current?city=${cityName}`)
            },
            () => {
                setContent(CATS.sad)
                push(`current?`)
            }
        )
    }, [])
    return (
        <main className='bg-dark-gray w-screen h-screen flex flex-col justify-center items-center text-white gap-4 text-center'>
            <div className='w-[200px]'>
                <Image src={content.gif} alt={content.alt} />
            </div>

            <span className='font-medium text-2xl tracking-wider'>
                {content.title}
            </span>
        </main>
    )
}
