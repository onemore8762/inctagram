import { useQuery } from '@tanstack/react-query'
import { type AxiosResponse } from 'axios'
import { type DeviceScheme } from 'entities/Device/types/DeviceScheme'
import { deviceService } from '../../model/service/deviceService'

export const useDevices = () => {
    return useQuery<AxiosResponse<DeviceScheme[]>>(['devices'], {
        queryFn: deviceService.getDevices,
        retry: false
    })
}
