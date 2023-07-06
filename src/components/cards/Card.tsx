export const Card = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div>
            <div
                className={`rounded-2xl py-4 px-6 bg-secondary-light dark:bg-secondary-dark text-medium-gray dark:text-secondary-light ${className}`}>
                {children}
            </div>
        </div>
    )
}
