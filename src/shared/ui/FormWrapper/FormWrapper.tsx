import { type FC, type FormEvent, type PropsWithChildren } from 'react'
import clsx from 'clsx'
import cls from './FormWrapper.module.scss'

interface FormWrapperProps {
    className?: string
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export const FormWrapper: FC<PropsWithChildren<FormWrapperProps>> = ({ children, onSubmit, className }) => {
    return (
        <div className={cls.wrapper}>
            <form onSubmit={onSubmit} className={clsx(cls.form, className)}>
                {children}
            </form>
        </div>
    )
}
