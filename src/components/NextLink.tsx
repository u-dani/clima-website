'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INextLinkProps {
    href: string
    path: string
    children: React.ReactNode
    className?: string
}

export const NextLink = ({
    href,
    path,
    children,
    className,
}: INextLinkProps) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={`px-3 py-2 rounded-lg text-center text-medium-gray dark:text-secondary-light ${
                pathname === path &&
                'bg-primary-light dark:bg-primary-dark text-white'
            } ${className}`}>
            <span className='hover:opacity-75 duration-150'>{children}</span>
        </Link>
    )
}
