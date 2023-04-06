import React, { type FC } from 'react'
import cls from './Loader.module.scss'
import clsx from 'clsx'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className = '' }) => {
    return (
        <div className={clsx(cls.ldsEllipsis, {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
