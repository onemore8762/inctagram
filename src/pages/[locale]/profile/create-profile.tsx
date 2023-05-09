import { UpdateProfilePage } from 'features/profile'
import { getLayoutWithSidebar } from 'layouts/Layout/LayoutWithSidebar/LayoutWithSidebar'

export default function CreateProfile () {
    return <UpdateProfilePage/>
}

CreateProfile.getLayout = getLayoutWithSidebar
