import { type FC, memo } from 'react'
import cls from './Device.module.scss'
import clsx from 'clsx'
import { Icons } from 'shared/assets/icons/browsers'
import { Button } from 'shared/ui/Button/Button'
import { fnBrowserDetect } from 'shared/lib/browser-detect'
import { type DeviceScheme } from 'entities/Device/types/DeviceScheme'
import IconLogOut from 'shared/assets/icons/general/log-out.svg'

interface PropsType {
    onRemove?: () => void
    isCurrentDevice?: boolean
    isLoading?: boolean
    device: Omit<DeviceScheme, 'deviceId'>
}

export const Device: FC<PropsType> = memo(({ device, isCurrentDevice, isLoading, onRemove }) => {
    const lastActiveDate = new Date(device.lastActiveDate).toISOString().replace('T', ' | ').slice(0, 21)
    const Browser: any = Icons[fnBrowserDetect(device.title).toLowerCase()]

    const title = fnBrowserDetect(device.title)
    return (
        <li className={cls.device}>
            <div className={cls.inner}>
                <Browser width={40} height={40}/>
                <div className={cls.content}>
                    <h3 className={cls.title}>{title}</h3>
                    <p className={cls.ip}>IP:&nbsp;{device.ip}</p>
                    <p className={clsx({ [cls.current]: isCurrentDevice })}>
                        {isCurrentDevice ? 'Online' : `Last visit: ${lastActiveDate}`}
                    </p>
                </div>
            </div>
            {!isCurrentDevice && (
                <Button className={cls.button}
                        theme={'clear'}
                        disabled={isLoading}
                        onClick={onRemove}>
                    <IconLogOut fill={'currentColor'} />
                    Log Out
                </Button>
            )}
        </li>
    )
})
