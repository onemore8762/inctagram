import React, { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import cls from './Button.module.scss'
import clsx from 'clsx'

export enum ButtonTheme {
    OUTLINE = 'outline',
    SECONDARY = 'secondary',
    PRIMARY = 'primary',
    TEXT_BUTTON = 'textButton'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    block: boolean
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.M,
        disabled,
        onClick,
        block,
        ...otherProps
    } = props

    const mods = {
        [cls.disabled]: disabled,
        [cls.block]: block
    }

    return (
        <button
                type='button'
                className={clsx(cls.Button, mods, [className, cls[size], cls[theme]])}
                disabled={disabled}
                onClick={onClick}
                {...otherProps}
        >
            {children}
        </button>
    )
}
)
