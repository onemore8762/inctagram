import { useQuery } from '@tanstack/react-query'
import { deviceService } from '../../model/service/deviceService'
import { Device } from 'entities/Device'
import cls from './DeviceList.module.scss'
import { Button } from 'shared/ui/Button/Button'

export const DeviceList = () => {
    const { isLoading, data: devices } = useQuery(['devices'], {
        queryFn: deviceService.getDevices,
        retry: false
    })

    const deviceItems = devices?.data.map(device => {
        return <Device onRemove={() => {}} key={device.deviceId} device={device}/>
    })

    const currentDevice = devices?.data.find(device => device.title === navigator.userAgent)

    return <>
        <div style={{ marginBottom: 30 }}>
            <h2>This Device</h2>
            {currentDevice && <Device device={currentDevice}/>}
        </div>
        <Button onClick={() => {}} type={'button'} theme={'outline'}>Terminate all other session</Button>
        <div>
            <h2>Active sessions</h2>
            <ul>{deviceItems}</ul>
        </div>
    </>
}
