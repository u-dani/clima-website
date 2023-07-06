'use client'
import { NextLink } from './NextLink'
import { useSearchParams } from 'next/navigation'

export const Navbar = () => {
    const searchParams = useSearchParams()

    return (
        <nav className='flex gap-6'>
            <NextLink
                path='/current'
                href={`/current?${searchParams.toString()}`}>
                Clima Atual
            </NextLink>
            <NextLink
                path='/forecast'
                href={`/forecast?${searchParams.toString()}`}>
                Próximos Dias
            </NextLink>
            <NextLink
                path='/interval'
                href={`/interval?${searchParams.toString()}`}>
                Intervalo de 3 horas
            </NextLink>
        </nav>
    )
}
