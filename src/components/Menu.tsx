'use client'
import { useState } from 'react'
import { NextLink } from './NextLink'
import { useSearchParams } from 'next/navigation'

import { ScaleTemperatureForm } from './form/ScaleTemperatureForm'
import { MdMenuOpen } from 'react-icons/md'
import { MdClose } from 'react-icons/md'
import { ThemeToggle } from './ThemeToggle'
import { IThemeToggleProps } from './ThemeToggle'

export const Menu = (themeToggleProps: IThemeToggleProps) => {
  const searchParams = useSearchParams()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='cursor-pointer text-base text-secondary-light'>
      <MdMenuOpen
        className='text-3xl text-medium-gray hover:text-primary-light dark:text-secondary-light dark:hover:text-primary-dark'
        onClick={() => {
          setShowMenu(true)
        }}
      />

      {showMenu && (
        <div className='absolute left-0 top-0 z-50 flex h-screen w-screen flex-col items-center bg-dark-gray p-4'>
          <div className='flex self-end'>
            <MdClose
              className='text-3xl hover:text-primary-light dark:hover:text-primary-dark'
              onClick={() => {
                setShowMenu(false)
              }}
            />
          </div>

          <div className='mt-8 flex min-w-[320px] flex-col items-center gap-4 p-4'>
            <div className='w-full border-b border-light-gray p-4 text-center'>
              <h3>Menu</h3>
            </div>

            <div
              className='flex w-full'
              onClick={() => {
                setShowMenu(false)
              }}>
              <NextLink
                path='/current'
                href={`/current?${searchParams.toString()}`}
                className='w-full text-white'>
                Clima Atual
              </NextLink>
            </div>

            <div
              className='flex w-full'
              onClick={() => {
                setShowMenu(false)
              }}>
              <NextLink
                path='/forecast'
                href={`/forecast?${searchParams.toString()}`}
                className='w-full text-white'>
                Próximos Dias
              </NextLink>
            </div>

            <div
              className='flex w-full'
              onClick={() => {
                setShowMenu(false)
              }}>
              <NextLink
                path='/interval'
                href={`/interval?${searchParams.toString()}`}
                className='w-full text-white'>
                Intervalo de 3 horas
              </NextLink>
            </div>
          </div>

          <div className='mt-16 flex min-w-[320px] flex-col items-center gap-4 p-4'>
            <div className='w-full border-b border-light-gray p-4 text-center'>
              <h3>Outras opções</h3>
            </div>

            <div className='flex w-full justify-between p-2'>
              <ScaleTemperatureForm />
              <ThemeToggle {...themeToggleProps} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
