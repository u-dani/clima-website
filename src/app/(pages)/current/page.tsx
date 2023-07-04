import { requestGeocoding } from '@/request/requestGeocoding'

export default async function CurrentWeatherPage() {
    const geocodingData = await requestGeocoding({ city: 'Salgueiro' })

    return <main></main>
}
