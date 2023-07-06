'use client'
import { useRouter } from 'next/navigation'
import { requestCityName } from '@/request/requestCityName'
import { useEffect } from 'react'

export default function Home() {
    const { push } = useRouter()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function (position) {
            const cityName = await requestCityName({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            })

            push(`current?city=${cityName}`)
        })
    })
    return (
        <main>
            <h1>
                Página principal, não vai ter nada aqui, apenas buscar a
                localização do usuário
            </h1>
            loc:
        </main>
    )
}
