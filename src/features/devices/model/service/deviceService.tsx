import { $api } from 'shared/api/api'
import { type DeviceScheme } from 'entities/Device/types/DeviceScheme'

export const deviceService = {
    getDevices () {
        return $api.get<DeviceScheme[]>('security/devices').then(data => data)
    },
    deleteAllDevices () {
        return $api.delete('security/devices')
    },
    deleteDevice (deviceId: string) {
        return $api.delete(`security/devices/${deviceId}`)
    }
}
