import { getLayoutWithSidebar } from 'layouts/Layout/LayoutWithSidebar/LayoutWithSidebar'
import { ProfilePage } from 'features/profile/ui/profilePage/ProfilePage'

export default function Profile () {
    return <ProfilePage/>
}

Profile.getLayout = getLayoutWithSidebar
