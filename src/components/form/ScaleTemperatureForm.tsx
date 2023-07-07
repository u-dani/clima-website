'use client'
import { SyntheticEvent } from 'react'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { CelsiusIcon } from '../icons/CelsiusIcon'
import { FahrenheitIcon } from '../icons/FahrenheitIcon'
export const ScaleTemperatureForm = () => {
    const { push } = useRouter()
    const pathname = usePathname()

    const searchParams = useSearchParams()
    const unit = searchParams.get('unit')

    const urlSearchParams = new URLSearchParams(searchParams.toString())
    urlSearchParams.delete('unit')
    const params = urlSearchParams.toString()

    const handleUnit = ({ currentTarget }: SyntheticEvent) => {
        const unit = currentTarget.getAttribute('data-unit')
        push(`${pathname}?${params}&unit=${unit}`)
    }

    const style =
        'rounded-full flex justify-center items-center w-9 h-9 cursor-pointer'
    const defaultLightThemeStyle = 'bg-secondary-light text-medium-gray'
    const checkedLightThemeStyle = 'bg-primary-light text-white'
    const defaultDarkThemeStyle = 'dark:bg-secondary-dark dark:text-light-gray'
    const checkedDarkThemeStyle = 'dark:bg-primary-dark dark:text-white'

    return (
        <form className='text-xl flex gap-6 w-max h-max'>
            <label
                htmlFor='celsius'
                className={`${style} ${
                    unit === 'metric' || unit === null
                        ? `${checkedLightThemeStyle} ${checkedDarkThemeStyle}`
                        : `${defaultLightThemeStyle} ${defaultDarkThemeStyle}`
                }`}>
                <input
                    type='radio'
                    name='temperature-scales'
                    id='celsius'
                    data-unit='metric'
                    onChange={handleUnit}
                    className='hidden'
                />
                <CelsiusIcon />
            </label>

            <label
                htmlFor='fahrenheit'
                className={`relative ${style} ${
                    unit === 'imperial'
                        ? `${checkedLightThemeStyle} ${checkedDarkThemeStyle}`
                        : `${defaultLightThemeStyle} ${defaultDarkThemeStyle}`
                }`}>
                <input
                    type='radio'
                    name='temperature-scales'
                    id='fahrenheit'
                    data-unit='imperial'
                    onChange={handleUnit}
                    className='hidden'
                />
                <div className='absolute top-2/4 -translate-y-2/4 right-1/4'>
                    <FahrenheitIcon />
                </div>
            </label>
        </form>
    )
}
