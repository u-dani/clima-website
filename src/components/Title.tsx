export const Title = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return <h1 className={`text-2xl tracking-wide ${className}`}>{children}</h1>
}
