import cls from './Header.module.scss'
import clsx from 'clsx'
import React from 'react'

interface HeaderProps {
    className?: string
}

export const Header = (props: HeaderProps) => {
    const { className } = props
    return (
        <div className={clsx(cls.Header, {}, [className])}>
            <p className={cls.HeaderText}>Inctagram</p>
        </div>
    )
}
