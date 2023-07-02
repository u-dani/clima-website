export interface ITemperatureScaleIconProps {
    width?: number
    height?: number
    bgColor?: string
    iconColor?: string
}

export const FahrenheitIcon = (props: ITemperatureScaleIconProps) => {
    return (
        <svg
            width={props.width ?? '40'}
            height={props.height ?? '40'}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
                width='40'
                height='40'
                rx='20'
                fill={props.bgColor ?? 'transparent'}
            />
            <circle
                cx='10.1788'
                cy='10.1788'
                r='3.17881'
                fill={props.iconColor ?? 'black'}
            />
            <path
                d='M28.8577 14.5607C28.8577 15.113 28.41 15.5607 27.8577 15.5607H21.9774C21.4251 15.5607 20.9774 16.0084 20.9774 16.5607V18.225C20.9774 18.7773 21.4251 19.225 21.9774 19.225H27.7007C28.253 19.225 28.7007 19.6727 28.7007 20.225V23.7857C28.7007 24.338 28.253 24.7857 27.7007 24.7857H21.9774C21.4251 24.7857 20.9774 25.2334 20.9774 25.7857V31.5C20.9774 32.0523 20.5297 32.5 19.9774 32.5H16.3577C15.8054 32.5 15.3577 32.0523 15.3577 31.5V11C15.3577 10.4477 15.8054 10 16.3577 10H27.8577C28.41 10 28.8577 10.4477 28.8577 11V14.5607Z'
                fill={props.iconColor ?? 'black'}
            />
        </svg>
    )
}
