import { getLayoutWithSidebar } from 'layouts/Layout/LayoutWithSidebar/LayoutWithSidebar'
import { UploadAvatar } from 'features/profile/ui/uploadAvatar/UploadAvatar'

export default function CreateProfile () {
    return <UploadAvatar/>
}

CreateProfile.getLayout = getLayoutWithSidebar
