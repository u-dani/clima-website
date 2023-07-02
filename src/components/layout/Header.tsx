import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { ThemeToggle } from '../ThemeToggle'
import { ScaleTemperatureForm } from '../form/ScaleTemperatureForm'
import { SearchInput } from '../form/SearchInput'

export const Header = () => {
    return (
        <header className='flex justify-between items-center gap-4 p-4 md:px-8 md:py-6 sm:gap-8'>
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
                <ThemeToggle />
            </div>

            <div className='sm:hidden'>
                <Menu />
            </div>
        </header>
    )
}
