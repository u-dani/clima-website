'use client'
import { MdMenuOpen } from 'react-icons/md'
import { MdClose } from 'react-icons/md'
import { NextLink } from './NextLink'
import { ScaleTemperatureForm } from './form/ScaleTemperatureForm'
import { ThemeToggle } from './ThemeToggle'
import { useState } from 'react'
import { IThemeToggleProps } from './ThemeToggle'

export const Menu = (themeToggleProps: IThemeToggleProps) => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='text-secondary-light text-base cursor-pointer'>
            <MdMenuOpen
                className='text-3xl text-medium-gray hover:text-primary-light dark:text-secondary-light dark:hover:text-primary-dark'
                onClick={() => {
                    setShowMenu(true)
                }}
            />

            {showMenu && (
                <div className='absolute top-0 left-0 bg-dark-gray w-screen h-screen p-4 flex flex-col items-center z-50'>
                    <div className='flex self-end'>
                        <MdClose
                            className='text-3xl hover:text-primary-light dark:hover:text-primary-dark'
                            onClick={() => {
                                setShowMenu(false)
                            }}
                        />
                    </div>

                    <div className='p-4 flex flex-col items-center gap-4 mt-8 min-w-[320px]'>
                        <div className='p-4 border-b border-light-gray w-full text-center'>
                            <h3>Menu</h3>
                        </div>

                        <NextLink href='/current' className='w-full text-white'>
                            Clima Atual
                        </NextLink>
                        <NextLink
                            href='/forecast'
                            className='w-full text-white'>
                            Próximos Dias
                        </NextLink>
                        <NextLink
                            href='/interval'
                            className='w-full text-white'>
                            Intervalo de 3 horas
                        </NextLink>
                    </div>

                    <div className='min-w-[320px] p-4 flex flex-col items-center gap-4 mt-16'>
                        <div className='p-4 border-b border-light-gray w-full text-center'>
                            <h3>Outras opções</h3>
                        </div>

                        <div className='flex justify-between w-full p-2'>
                            <ScaleTemperatureForm />
                            <ThemeToggle {...themeToggleProps} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
