import cls from './Device.module.scss'
import { type DeviceScheme } from 'entities/Device/types/DeviceScheme'
import { type FC, memo } from 'react'
import { Icons } from 'shared/assets/icons/browsers'
import { fnBrowserDetect } from 'shared/lib/browser-detect'

interface PropsType {
    onRemove?: () => void
    device: Omit<DeviceScheme, 'deviceId'>
}

export const Device: FC<PropsType> = memo(({ device, onRemove }) => {
    const lastActiveDate = new Date(device.lastActiveDate).toISOString().replace('T', ' / ').substr(0, 21)
    const Browser: any = Icons[fnBrowserDetect(device.title).toLowerCase()]

    const title = fnBrowserDetect(device.title)
    return (
        <li className={cls.device}>
            <Browser width={40} height={40}/>
            <div className={cls.content}>
                <h3>{title}</h3>
                <p>IP:&nbsp;{device.ip}</p>
                <p>Last active date:&nbsp;{lastActiveDate}</p>
            </div>
        </li>
    )
})
