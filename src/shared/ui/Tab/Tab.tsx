import clsx from 'clsx'
import React, { memo, forwardRef } from 'react'
import { type ChangeHandler } from 'react-hook-form'
import { useTheme } from 'app/providers/ThemeProvider'
import cls from './Tab.module.scss'

interface TabProps {
    className?: string
    isSelected: boolean
    text: string
}

export const Tab = (props: TabProps) => {
    const {
        text, className, isSelected
    } = props

    return (
        <div className={clsx(className, cls.tab, isSelected && cls.selectedTab)}>
            {text}
        </div>
    )
}
