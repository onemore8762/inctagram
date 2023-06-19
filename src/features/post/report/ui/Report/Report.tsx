import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import React, { useCallback } from 'react'

import { Theme, useTheme } from 'app/providers/ThemeProvider'

import IconReport from 'shared/assets/icons/light/email.svg'
import IconReportOutline from 'shared/assets/icons/outline/email-outline.svg'
import { useReport } from '../../model'
import cls from './Report.module.scss'

export const Report = () => {
    const { theme } = useTheme()
    const fill = theme === Theme.LIGHT ? '#000000' : '#ffffff'

    const { report } = useReport()

    const onReportPostClick = useCallback(async () => {
        report()
    }, [])

    return (
        <Menu.Item>
            {({ active }) => (
                <button type='button'
                        className={clsx(cls.item)}
                        onClick={onReportPostClick}
                >
                    {active
                        ? <IconReport aria-hidden="true" fill={fill}/>
                        : <IconReportOutline aria-hidden="true" fill={fill}/>
                    }
                    Report</button>)}

        </Menu.Item>
    )
}
