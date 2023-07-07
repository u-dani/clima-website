'use client'
import { useEffect, useState } from 'react'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { ThemeToggle } from '../ThemeToggle'
import { ScaleTemperatureForm } from '../form/ScaleTemperatureForm'
import { SearchForm } from '../form/SearchForm'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>()

    const { push } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    urlSearchParams.delete('city')
    const newParams = urlSearchParams.toString()

    function toggleTheme(theme: 'dark' | 'light') {
        localStorage?.setItem('color-theme', theme)
        setTheme(theme)

        theme === 'light'
            ? document.documentElement.classList.remove('dark')
            : document.documentElement.classList.add('dark')
    }

    function handleSubmitSearchForm({
        valueInput,
    }: {
        valueInput: string | undefined
    }) {
        push(`${pathname}?city=${valueInput}&${newParams}`)
    }

    useEffect(() => {
        if (localStorage.getItem('color-theme') === 'light') {
            setTheme('light')
            document.documentElement.classList.remove('dark')
        } else {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    }, [])

    return (
        <header className='flex justify-between items-center gap-4 p-4 md:px-8 md:py-6 sm:gap-8 border-b border-neutral-200 dark:border-neutral-600'>
            <Logo />
            <div className='w-full max-w-[500px]'>
                <SearchForm handleSubmit={handleSubmitSearchForm} />
            </div>
            <div className='max-sm:hidden'>
                <ScaleTemperatureForm />
            </div>
            <div className='max-sm:hidden'>
                <ThemeToggle theme={theme} handleClick={toggleTheme} />
            </div>

            <div className='sm:hidden'>
                <Menu theme={theme} handleClick={toggleTheme} />
            </div>
        </header>
    )
}
