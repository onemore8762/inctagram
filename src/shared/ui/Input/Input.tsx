import React, {InputHTMLAttributes, ReactNode} from "react";
import cls from './Input.module.scss'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string  /*text or password*/
  variant?: string  /*outline or search*/
  placeholder?: string
  className?: string
  disabled?: boolean
  children?: ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = (props: InputProps) => {
  const {
    className,
    children,
    onChange,
    disabled,
    variant,
    placeholder,
    type,
    ...otherProps
  } = props

  const mods = {
    [cls.disabled]: disabled,
  }

  const typeStyle = type === 'password' ? 'password' : ''

  return (
    <input
      type={type}
      className={clsx(cls.Input, mods, [className, cls[variant], cls[typeStyle]])}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      {...otherProps}
    >
      {children}
    </input>
  )
}
