import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle'

export interface IThemeToggleProps {
    theme: 'dark' | 'light' | undefined
    handleClick(theme: 'dark' | 'light'): void
}

export const ThemeToggle = ({ theme, handleClick }: IThemeToggleProps) => {
    return (
        <DarkModeToggle
            mode={theme}
            size='sm'
            inactiveTrackColor='#8A2BE2'
            inactiveTrackColorOnHover='#a23fff'
            inactiveTrackColorOnActive='#8A2BE2'
            activeTrackColor='#EC6316'
            activeTrackColorOnHover='#ff7525'
            activeTrackColorOnActive='#EC6316'
            inactiveThumbColor='#1B1A1D'
            activeThumbColor='#f5f5f5'
            onChange={mode => {
                handleClick(mode)
            }}
        />
    )
}
