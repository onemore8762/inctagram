import { useQuery } from '@tanstack/react-query'
import { type AxiosResponse } from 'axios'
import { type DeviceScheme } from 'shared/types/device'
import { deviceService } from 'shared/api/devices/deviceService'

export const useDevices = () => {
    return useQuery<AxiosResponse<DeviceScheme[]>>(['devices'], {
        queryFn: deviceService.getDevices,
        retry: false
    })
}
