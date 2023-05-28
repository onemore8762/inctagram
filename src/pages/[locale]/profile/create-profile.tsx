import { Tab as LibTab } from '@headlessui/react'
import { getLayoutWithSidebar } from 'layouts/Layout/LayoutWithSidebar/LayoutWithSidebar'
import { DeviceList } from 'features/devices'
import { UpdateProfilePage } from 'features/profile'
import { Tab } from 'shared/ui/Tab/Tab'

export default function CreateProfile () {
    return <>
        <LibTab.Group>
            <LibTab.List style={{ color: '#fff' }}>
                <LibTab >
                    {({ selected }) => (
                        <Tab text={'My Profile'} isSelected={selected}/>
                    )}
                </LibTab>
                <LibTab >
                    {({ selected }) => (
                        <Tab text={'Devices'} isSelected={selected}/>
                    )}
                </LibTab>

            </LibTab.List>
            <LibTab.Panels>
                <LibTab.Panel style={{ marginTop: '35px' }}>
                    <UpdateProfilePage/>

                </LibTab.Panel>
                <LibTab.Panel style={{ marginTop: '35px' }}><DeviceList/></LibTab.Panel>
                <LibTab.Panel>Content 3</LibTab.Panel>
            </LibTab.Panels>
        </LibTab.Group>

    </>
}

CreateProfile.getLayout = getLayoutWithSidebar
