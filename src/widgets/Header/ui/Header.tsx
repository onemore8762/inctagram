import cls from './Header.module.scss'
import clsx from 'clsx'
import React from 'react'
import { AppLink } from '../../../shared/ui/AppLink/AppLink'

interface HeaderProps {
    className?: string
}

export const Header = (props: HeaderProps) => {
    const { className } = props
    return (
        <div className={clsx(cls.Header, {}, [className])}>
            <p className={cls.HeaderText}>
                <AppLink href={'/'}>Inctagram</AppLink>
            </p>
        </div>
    )
}
