import { useQuery } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import { useAuth } from '../../entities/User'
import { profileService } from '../../features/profile/model/service/profileService'
import { useSnackbar } from '../../widgets/SnackBar/model/store/snackbarStore'

export const useGetProfileData = (params?: any) => {
    const { userId } = useAuth()
    const onOpen = useSnackbar((state) => state.onOpen)
    const { data: response, isLoading } = useQuery(['getProfileData', userId],
        () => profileService.getProfileData(userId), {
            ...params,
            onSuccess: ({ data }) => {
                console.log(data)
            },
            onError: (error: AxiosError<{ message: string }>) => {
                onOpen(error.message, 'danger', 'left')
            }
        }
    )
    return { isLoading, response }
}
