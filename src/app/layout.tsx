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
            <body
                className={`${confortaa.className} bg-white dark:bg-dark-gray text-medium-gray dark:text-secondary-light flex flex-col gap-8`}>
                <Header />
                <div className='px-8 max-sm:hidden'>
                    <Navbar />
                </div>
                <main className='px-4 md:px-8'>{children}</main>
            </body>
        </html>
    )
}
