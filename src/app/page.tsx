'use client'
import Image from 'next/image'
import catSpinning from 'public/cats/cat-spinning.gif'
import { useRouter } from 'next/navigation'
import { requestCityName } from '@/request/requestCityName'
import { useEffect } from 'react'

export default function Home() {
  const { push } = useRouter()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        const cityName = await requestCityName({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
        push(`current?city=${cityName}`)
      },
      () => {
        console.log('Não foi possivel encontrar a sua localização atual.')
        push(`current?`)
      },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center gap-4 bg-dark-gray text-center text-white'>
      <Image src={catSpinning} alt='Carregando' width={80} height={80} />
      Buscando sua localização
    </main>
  )
}
