import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useCallback, useMemo } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

import { copyToClipboard } from 'features/post/helpers/copyToClipboard'
import { useReport } from 'features/post/model/hooks/useReport'
import { useSubscribeOrUnsubscribe } from 'features/post/model/hooks/useSubscribeOrUnsubscribe'
import IconCopy from 'shared/assets/icons/light/copy.svg'
import IconReport from 'shared/assets/icons/light/email.svg'
import IconUnsubscribe from 'shared/assets/icons/light/person-remove.svg'
import IconCopyOutline from 'shared/assets/icons/outline/copy-outline.svg'
import IconReportOutline from 'shared/assets/icons/outline/email-outline.svg'

import IconThreedots from 'shared/assets/icons/outline/more-horizontal.svg'
import IconUnsubscribeOutline from 'shared/assets/icons/outline/person-remove-outline.svg'

import cls from './PostDropdown.module.scss'

interface PostDropdownProps {
    postId: string
    userId: string
}

export const PostDropdown = ({ postId, userId, ...restProps }: PostDropdownProps) => {
    // ? сколько раз вызывается хук, и можем ли мемоизировать?
    const { theme } = useTheme()
    const fill = theme === Theme.LIGHT ? '#000000' : '#ffffff'

    const { subscribeOrUnsubscribe } = useSubscribeOrUnsubscribe(userId)
    const { report } = useReport()

    const onReportPostClick = useCallback(async () => {
        report()
    }, [])
    const onUnsubscribePersonClick = useCallback(async () => {
        subscribeOrUnsubscribe()
    }, [])
    const onCopyURLClick = useCallback(async () => {
        await copyToClipboard()
    }, [])

    const icons = useMemo(() => [
        {
            light: <IconReport aria-hidden="true" fill={fill}/>,
            outline: <IconReportOutline aria-hidden="true" fill={fill}/>,
            iconFunction: onReportPostClick,
            text: 'Report'
        }, {
            light: <IconUnsubscribe aria-hidden="true" fill={fill}/>,
            outline: <IconUnsubscribeOutline aria-hidden="true" fill={fill}/>,
            iconFunction: onUnsubscribePersonClick,
            text: 'Unsubscribe'
        }, {
            light: <IconCopy aria-hidden="true" fill={fill}/>,
            outline: <IconCopyOutline aria-hidden="true" fill={fill}/>,
            iconFunction: onCopyURLClick,
            text: 'Copy Link'
        }
    ], [fill, onReportPostClick, onUnsubscribePersonClick, onCopyURLClick])

    return (<>
        <Menu as='div' className={clsx(cls.menu)}>
            <Menu.Button>
                <IconThreedots className={clsx(cls.menu_icon)}/>
            </Menu.Button>
            <Transition
          as={Fragment}
          enter={clsx(cls.enter)}
          enterFrom={clsx(cls.enter_from)}
          enterTo={clsx(cls.enter_to)}
          leave={clsx(cls.leave)}
          leaveFrom={clsx(cls.leave_from)}
          leaveTo={clsx(cls.leave_to)}
            >
                <Menu.Items className={clsx(cls.items)}>
                    {icons.map((icon: any, index) => (
                        <Menu.Item key={index} >
                            {({ active }) => (
                                <button type='button'
                                        className={clsx(cls.item)}
                                        onClick={icon.iconFunction}
                                >
                                    {active
                                        ? icon.light

                                        : icon.outline
                                    }
                                    {icon.text} </button>)}

                        </Menu.Item>
                    ))}

                </Menu.Items>
            </Transition>
        </Menu>

    </>

    )
}
