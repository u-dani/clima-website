'use client'
import { MdMenuOpen } from 'react-icons/md'
import { MdClose } from 'react-icons/md'
import { NextLink } from './NextLink'
import { ScaleTemperatureForm } from './form/ScaleTemperatureForm'
import { ThemeToggle } from './ThemeToggle'
import { useState } from 'react'

export const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='text-secondary-light text-base'>
            <MdMenuOpen
                className='text-3xl text-medium-gray hover:text-primary-light dark:text-secondary-light dark:hover:text-primary-dark'
                onClick={() => {
                    setShowMenu(true)
                }}
            />

            {showMenu && (
                <div className='absolute top-0 left-0 bg-dark-gray w-screen h-screen p-4'>
                    <div className='flex justify-end'>
                        <MdClose
                            className='text-3xl  hover:text-primary-light dark:hover:text-primary-dark'
                            onClick={() => {
                                setShowMenu(false)
                            }}
                        />
                    </div>

                    <div className='p-4 flex flex-col items-center gap-4 mt-8'>
                        <div className='p-4 border-b border-light-gray w-full text-center'>
                            <h3>Menu</h3>
                        </div>

                        <NextLink href='/current'>Clima Atual</NextLink>
                        <NextLink href='/forecast'>Próximos Dias</NextLink>
                        <NextLink href='/interval'>
                            Intervalo de 3 horas
                        </NextLink>
                    </div>

                    <div className='p-4 flex flex-col items-center gap-4 mt-16'>
                        <div className='p-4 border-b border-light-gray w-full text-center'>
                            <h3>Outras opções</h3>
                        </div>

                        <div className='flex justify-between w-full p-2'>
                            <ScaleTemperatureForm />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}