import cls from './AppLink.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import React, { type ReactNode } from 'react'
import { useRouter } from 'next/router'

interface AppLinkProps {
    className?: string
    Icon?: typeof React.Component
    text?: string
    variant?: 'clear'
    href?: string
    locale?: string | string[]
    active?: boolean
    children?: ReactNode
    skipLocaleHandling?: any
}

export const AppLink = (props: AppLinkProps) => {
    const {
        Icon,
        className,
        text,
        active = false,
        children,
        variant = '',
        ...rest
    } = props
    let {
        skipLocaleHandling
    } = props

    const router = useRouter()
    const locale = rest.locale || router.query.locale || ''

    let href = rest.href || router.asPath
    if (href.indexOf('http') === 0) skipLocaleHandling = true
    if (locale && !skipLocaleHandling) {
        href = href
            ? `/${locale as string}${href}`
            : router.pathname.replace('[locale]', locale as string)
    }

    const mods = {
        [cls.active]: active
    }
    return (
        <Link href={href} legacyBehavior>
            <a className={clsx(cls.AppLink, cls[variant], mods, className)} {...rest}>{children}</a>
        </Link>
    )
}
