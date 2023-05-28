import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import { useSnackbar } from 'widgets/SnackBar/model/store/snackbarStore'
import { type ProfileDataModel } from 'features/authorization/model/types/UserAuthSchema'
import { profileService } from 'features/profile/model/service/profileService'
import { useAuth } from 'entities/User'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { routerPush } from 'shared/lib/routerPush/routerPush'

export const useUpdateProfileData = () => {
    const onOpen = useSnackbar((state) => state.onOpen)
    const queryClient = useQueryClient()
    const { userId } = useAuth()

    const { mutate, data, error } = useMutation(profileService.updateProfileData, {
        onSuccess: ({ data }) => {
            queryClient.setQueriesData<ProfileDataModel>([
                'getProfileData',
                userId
            ], (profiledata) => {
                if (profiledata) return { ...profiledata, ...data }
                return data
            })
            routerPush(AppRoutes.PROFILE.MYPROFILE)
        },
        onError: (error: AxiosError<{ message: string }>) => {
            onOpen(error.message, 'danger', 'left')
        }
    })

    return { mutate, data, error }
}
