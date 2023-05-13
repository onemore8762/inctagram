import { type AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useSnackbar } from 'widgets/SnackBar/model/store/snackbarStore'
import { profileService } from 'features/profile/model/service/profileService'

export const useUpdateProfileData = () => {
    const onOpen = useSnackbar((state) => state.onOpen)

    const { mutate, data, error } = useMutation(profileService.updateProfileData, {
        onError: (error: AxiosError<{ message: string }>) => {
            onOpen(error.message, 'danger', 'left')
        }
    })

    return { mutate, data, error }
}
