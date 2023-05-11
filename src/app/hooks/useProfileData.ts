import { useQuery } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import { useState } from 'react'
import { useAuth } from '../../entities/User'
import { type ProfileDataModel } from '../../features/authorization/model/types/UserAuthSchema'
import { profileService } from '../../features/profile/model/service/profileService'
import { useSnackbar } from '../../widgets/SnackBar/model/store/snackbarStore'

export const useProfileData = () => {
    const [userData, setUserData] = useState<ProfileDataModel>()
    const { userId } = useAuth()
    const onOpen = useSnackbar((state) => state.onOpen)
    const { data: response, isLoading } = useQuery(['getProfileData', userId],
        () => profileService.getProfileData(userId), {
            onSuccess: ({ data }) => {
                setUserData(data)
            },
            onError: (error: AxiosError<{ message: string }>) => {
                onOpen(error.message, 'danger', 'left')
            }
        }
    )
    return { userData, isLoading, response }
}
