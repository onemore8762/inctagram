import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
import cls from './Button.module.scss'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: 'outline' | 'secondary' | 'primary' | 'textButton' | 'clear'
    size?: 'small' | 'medium' | 'regular'
    disabled?: boolean
    children?: ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    block?: boolean
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'primary',
        size = 'medium',
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
