import { useQuery } from '@tanstack/react-query'
import { deviceService } from '../../model/service/deviceService'
import { type DeviceScheme } from 'entities/Device/types/DeviceScheme'
import { type AxiosResponse } from 'axios'

export const useDevices = () => {
    return useQuery<AxiosResponse<DeviceScheme[]>>(['devices'], {
        queryFn: deviceService.getDevices,
        retry: false
    })
}
