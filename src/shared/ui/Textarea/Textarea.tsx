import cls from './Textarea.module.scss'
import clsx from 'clsx'
import React, { type ChangeEvent, useState } from 'react'

interface TextareaProps {
    className?: string
    name?: string
    id?: string
    placeholder?: string
    onChange?: (value: string) => void
}

export const Textarea = (props: TextareaProps) => {
    const [text, setText] = useState('')
    const {
        className,
        name,
        id,
        placeholder,
        onChange,
        ...otherProps
    } = props

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    return (
        <textarea
                className={clsx(cls.Textarea, [className])}
                name={name}
                id={id}
                value={text}
                placeholder={placeholder}
                onChange={handleChange}
                {...otherProps}
        />
    )
}
