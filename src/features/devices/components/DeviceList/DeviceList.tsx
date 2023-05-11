import { Device } from 'entities/Device'
import { Button } from 'shared/ui/Button/Button'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useDevices } from '../../model/hooks/useDevices'
import { useTerminateAllDevices } from '../../model/hooks/useTerminateAllDevices'
import { useTerminateDevice } from '../../model/hooks/useTerminateDevice'
import cls from './DeviceList.module.scss'

export const DeviceList = () => {
    const { isLoading, data: devices, isError } = useDevices()
    const { onAllTerminate, isDevicesLoading } = useTerminateAllDevices()
    const { onTerminate, isDeviceLoading } = useTerminateDevice()

    if (isLoading || isError) {
        return <PageLoader/>
    }
    const currentDevice = devices.data.find(device => device.title === navigator.userAgent)

    const deviceItems = devices.data.map(device => device.title !== navigator.userAgent
        ? <Device key={device.deviceId} isLoading={isDeviceLoading} onRemove={onTerminate(device.deviceId)}
                  device={device}/>
        : null)

    return <>
        <div className={cls.device}>
            <h2 className={cls.title}>This Device</h2>
            <ul>{currentDevice && <Device isCurrentDevice device={currentDevice}/>}</ul>
            <Button className={cls.button} type={'button'}
                    disabled={isDevicesLoading} theme={'outline'} onClick={onAllTerminate}>
                Terminate all other session</Button>
        </div>
        <div>
            <h2 className={cls.title}>Active sessions</h2>
            {deviceItems.length === 1 ? <p>No active sessions</p> : <ul>{deviceItems}</ul>}
        </div>
    </>
}
