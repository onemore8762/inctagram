import { forwardRef, type InputHTMLAttributes, type ReactNode, useState } from 'react'
import cls from './Input.module.scss'
import clsx from 'clsx'
import { Eye } from 'shared/ui/Eye/Eye'
import Search from 'shared/assets/icons/general/search.svg'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'email' | 'password' | 'text' | 'search'/* text or password */
    variant?: 'outline' | 'standard'
    placeholder?: string
    error?: boolean
    errorText?: string
    className?: string
    disabled?: boolean
    children?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        className,
        variant = 'standard',
        children,
        onChange,
        disabled,
        error,
        errorText,
        placeholder,
        type = 'text',
        ...otherProps
    } = props

    const mods = {
        [cls.disabled]: disabled,
        [cls.outline]: type === 'search',
        [cls.error]: error
    }

    const mod = {
        [cls.error]: error
    }

    const [isVisible, setIsVisible] = useState(false)

    const onClickChangeVisible = (): void => {
        setIsVisible(!isVisible)
    }

    const isPassword = type === 'password' && !isVisible ? 'password' : 'text'

    return (
        <>
            <div className={clsx(cls.wrapper, mod, cls[variant])}>
                <input
                    ref={ref}
                    type={type !== 'password' ? type : isPassword}
                    className={clsx(cls.input, mods, [className, cls[type]])}
                    disabled={disabled}
                    placeholder={placeholder}
                    {...otherProps}
                />
                {type === 'password' && <Eye isVisible={isVisible} onClick={onClickChangeVisible}/>}
                {type === 'search' && <Search className={cls.icon}/>}
            </div>
            {errorText && <span className={cls.error}>{errorText}</span>}
        </>
    )
})
