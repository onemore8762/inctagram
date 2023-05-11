import { getLayoutWithSidebar } from 'layouts/Layout/LayoutWithSidebar/LayoutWithSidebar'
import { UpdateProfilePage } from 'features/profile'

export default function CreateProfile () {
    return <UpdateProfilePage/>
}

CreateProfile.getLayout = getLayoutWithSidebar
