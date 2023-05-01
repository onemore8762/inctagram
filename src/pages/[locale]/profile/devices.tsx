import { getLayoutWithSidebar } from 'layouts/Layout/LayoutWithSidebar/LayoutWithSidebar'
import { DeviceList } from 'features/devices'

export default function Devices () {
    return <><DeviceList/></>
}

Devices.getLayout = getLayoutWithSidebar
