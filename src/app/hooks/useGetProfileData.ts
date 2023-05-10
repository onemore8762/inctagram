import { profileService } from '../../features/profile/model/service/profileService'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../entities/User'
import { type AxiosError } from 'axios'
import { useSnackbar } from '../../widgets/SnackBar/model/store/snackbarStore'
import { type ProfileDataModel } from '../../features/authorization/model/types/UserAuthSchema'
import { useState } from 'react'

export const useGetProfileData = () => {
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
