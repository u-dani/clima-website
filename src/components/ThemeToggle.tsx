'use client'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
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

    function toggleTheme() {
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark')
                localStorage.setItem('color-theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('color-theme', 'light')
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('color-theme', 'light')
            } else {
                document.documentElement.classList.add('dark')
                localStorage.setItem('color-theme', 'dark')
            }
        }
    }
    return (
        <DarkModeToggle
            mode={theme}
            size='sm'
            inactiveTrackColor='#8A2BE2'
            inactiveTrackColorOnHover='#a23fff'
            inactiveTrackColorOnActive='#8A2BE2'
            activeTrackColor='#EC6316'
            activeTrackColorOnHover='#ff7525'
            activeTrackColorOnActive='#EC6316'
            inactiveThumbColor='#1B1A1D'
            activeThumbColor='#f5f5f5'
            onChange={mode => {
                setTheme(mode)
                toggleTheme()
            }}
        />
    )
}
