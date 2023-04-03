import React, {InputHTMLAttributes, ReactNode} from "react";
import cls from './Input.module.scss'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string
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
    ...otherProps
  } = props

  const mods = {
    [cls.disabled]: disabled
  }

  return (
    <input
      type={'text'}
      className={clsx(cls.Input, mods, [className, cls[variant]])}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    >
      {children}
    </input>
  )
}
