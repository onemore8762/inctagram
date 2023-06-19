import { useQuery } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import { useSnackbar } from 'widgets/SnackBar/model/store/snackbarStore'
import { useAuth } from 'features/auth'
import { profileService } from 'shared/api/profile'

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
