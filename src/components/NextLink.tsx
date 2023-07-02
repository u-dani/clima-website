'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INextLinkProps {
    href: string
    children: React.ReactNode
}

export const NextLink = ({ href, children }: INextLinkProps) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={`px-3 py-2 rounded-lg ${
                pathname === href &&
                'bg-primary-light dark:bg-primary-dark text-white'
            }`}>
            {children}
        </Link>
    )
}
