import { NextLink } from './NextLink'

export const Navbar = () => {
    return (
        <nav className='flex gap-6 p-4'>
            <NextLink href='/current'>Clima Atual</NextLink>
        </nav>
    )
}
