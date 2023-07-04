'use client'
import { useEffect, useState } from 'react'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { ThemeToggle } from '../ThemeToggle'
import { ScaleTemperatureForm } from '../form/ScaleTemperatureForm'
import { SearchInput } from '../form/SearchInput'

export const Header = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>(
        localStorage.getItem('color-theme') === 'light' ? 'light' : 'dark'
    )

    useEffect(() => {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [])

    function toggleTheme(theme: 'dark' | 'light') {
        localStorage.setItem('color-theme', theme)
        setTheme(theme)

        theme === 'light'
            ? document.documentElement.classList.remove('dark')
            : document.documentElement.classList.add('dark')
    }

    return (
        <header className='flex justify-between items-center gap-4 p-4 md:px-8 md:py-6 sm:gap-8 border-b border-neutral-200'>
            <Logo />
            <div className='w-full max-w-[500px]'>
                <SearchInput
                    id='city-name'
                    placeholder='Digite o nome da sua cidade'
                />
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
