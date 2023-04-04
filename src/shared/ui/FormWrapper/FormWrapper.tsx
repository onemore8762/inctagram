import { type FC, type PropsWithChildren } from 'react'
import clsx from 'clsx'
import cls from './FormWrapper.module.scss'

interface FormWrapperProps {
    title: string
    className?: string
    onSubmit?: (data: any) => void
}

export const FormWrapper: FC<PropsWithChildren<FormWrapperProps>> = ({ children, onSubmit, title, className }) => {
    return (
        <form onSubmit={onSubmit} className={clsx(cls.form, className)}>
            {children}
        </form>
    )
}
