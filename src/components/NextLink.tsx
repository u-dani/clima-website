'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INextLinkProps {
    href: string
    children: React.ReactNode
    className?: string
}

export const NextLink = ({ href, children, className }: INextLinkProps) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={`px-3 py-2 rounded-lg text-center text-medium-gray dark:text-secondary-light ${
                pathname === href &&
                'bg-primary-light dark:bg-primary-dark text-white'
            } ${className}`}>
            <span className='hover:opacity-75 duration-150'>{children}</span>
        </Link>
    )
}
