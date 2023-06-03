import { type DeviceScheme } from 'shared/types/device'
import { $api } from 'shared/api/api'

export const deviceService = {
    getDevices () {
        return $api.get<DeviceScheme[]>('security/devices').then(data => data)
    },
    terminateAllDevices () {
        return $api.delete('security/devices')
    },
    terminateDevice (deviceId: string) {
        return $api.delete(`security/devices/${deviceId}`)
    }
}
