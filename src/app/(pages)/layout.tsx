import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Navbar } from '@/components/Navbar'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='bg-white dark:bg-dark-gray text-medium-gray dark:text-secondary-light flex flex-col gap-8'>
            <Header />
            <div className='px-8 max-sm:hidden'>
                <Navbar />
            </div>
            <main className='px-4 md:px-8'>{children}</main>
            <Footer />
        </div>
    )
}
