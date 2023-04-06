import React, { type FC } from 'react'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'
import clsx from 'clsx'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className = '' }) => {
    return (
        <div className={clsx(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}
