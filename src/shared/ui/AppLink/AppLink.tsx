import cls from './AppLink.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface AppLinkProps {
    Icon: typeof React.Component
    text: string
    href: string
    active?: boolean
}

export const AppLink = (props: AppLinkProps) => {
    const {
        Icon,
        text,
        href,
        active = false,
        ...otherProps
    } = props

    const mods = {
        [cls.active]: active
    }
    return (
        <Link href={href} className={clsx(cls.AppLink, mods)} {...otherProps}>
            <Icon className={clsx(cls.icon, mods)}/>
            {text}
        </Link>
    )
}
