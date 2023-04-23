import { getLayoutWithSidebar } from 'layouts/Layout/LayoutWithSidebar/LayoutWithSidebar'
import { UploadAvatar } from '../../../features/profile/uploadAvatar/UploadAvatar'

export default function CreateProfile () {
    return <UploadAvatar/>
}

CreateProfile.getLayout = getLayoutWithSidebar
