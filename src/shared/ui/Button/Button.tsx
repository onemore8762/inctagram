import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import cls from './Button.module.scss'
import clsx from 'clsx'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        square,
        disabled,
        ...otherProps
    } = props

    const mods = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    return (
        <button
                type='button'
                className={clsx(cls.Button, mods, [className, cls[size], cls[theme]])}
                disabled={disabled}
                {...otherProps}
        >
            {children}
        </button>
    )
}
)
