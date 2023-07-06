import { Header } from '@/components/layout/Header'
import './globals.css'
import { Comfortaa } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

const confortaa = Comfortaa({ subsets: ['latin'] })

export const metadata = {
    title: 'Clima',
    description: 'Clima atual da sua cidade e a previsão dos próximos dias',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='pt-br'>
            <body>{children}</body>
        </html>
    )
}
