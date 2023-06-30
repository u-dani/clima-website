"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INextLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NextLink = ({ href, children }: INextLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm rounded-lg text-medium-gray dark:text-white ${
        pathname === href && "bg-primary-light dark:bg-primary-dark text-white"
      }`}
    >
      {children}
    </Link>
  );
};
