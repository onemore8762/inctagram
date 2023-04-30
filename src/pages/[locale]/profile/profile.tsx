import React from 'react'
import { getLayoutWithSidebar } from '../../../layouts/Layout/LayoutWithSidebar/LayoutWithSidebar'
import { useProfileData } from '../../../app/hooks/useProfileData'

export default function Profile () {
    const { userData } = useProfileData()
    console.log(userData)
    return (
        <div>
            Profile
        </div>
    )
}

Profile.getLayout = getLayoutWithSidebar
