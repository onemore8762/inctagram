import { type ProfileDataModel } from '../../types/auth'
import { $api } from '../api'

export const profileService = {
    uploadAvatar (file: FormData) {
        return $api.post('/users/avatar', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    getProfileData () {
        return $api.get<ProfileDataModel>('/users/profile')
    },

    updateProfileData (body: ProfileDataModel) {
        return $api.put<ProfileDataModel>('/users/profile', body)
    },

    subscribeOrUnsubscribe (userId: string) {
        return $api.patch<ProfileDataModel>(`/users/${userId}/subscribe`)
    }

}
