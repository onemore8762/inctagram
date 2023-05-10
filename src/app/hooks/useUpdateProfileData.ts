import { useMutation } from '@tanstack/react-query'
import { profileService } from 'features/profile/model/service/profileService'
import { useGetProfileData } from 'app/hooks/useGetProfileData'

export const useUpdateProfileData = () => {
    const { userData } = useGetProfileData()
    const { mutate, data, error } = useMutation(profileService.updateProfileData)

    return { mutate, data, error, userData }
}
