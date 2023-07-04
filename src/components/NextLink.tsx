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
            className={`px-3 py-2 rounded-lg text-center ${
                pathname === href &&
                'bg-primary-light dark:bg-primary-dark text-white'
            } ${className}`}>
            {children}
        </Link>
    )
}
