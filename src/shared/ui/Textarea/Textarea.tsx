import cls from './Textarea.module.scss'
import clsx from 'clsx'
import React, { memo, forwardRef } from 'react'
import { type ChangeHandler } from 'react-hook-form'

interface TextareaProps {
    className?: string
    name?: string
    id?: string
    label?: string
    labelClassName?: string
    textareaClassName?: string
    placeholder?: string
    onChange: ChangeHandler
}

export const Textarea = memo(forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    const {
        className,
        name,
        id,
        placeholder,
        label,
        labelClassName,
        textareaClassName,
        onChange,
        ...otherProps
    } = props

    return (
        <div className={className}>
            <label htmlFor={id} className={labelClassName}>{label}</label>
            <textarea
                className={clsx(cls.Textarea, [textareaClassName])}
                name={name}
                id={id}
                ref={ref}
                placeholder={placeholder}
                onChange={onChange}
                {...otherProps}
            />
        </div>
    )
}))
