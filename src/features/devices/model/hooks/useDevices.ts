import { useQuery } from '@tanstack/react-query'
import { deviceService } from 'features/devices/model/service/deviceService'
import { type DeviceScheme } from 'entities/Device/types/DeviceScheme'
import { type AxiosResponse } from 'axios'

export const useDevices = () => {
    const { data } = useQuery(['devices'], {
        queryFn: deviceService.getDevices,
        retry: false
    })

    // const currentDevice = data.find(device => device.title === navigator.userAgent)
}
