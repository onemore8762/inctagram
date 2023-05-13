import { $api } from '../../../../shared/api/api'
import { type ProfileDataModel } from '../../../authorization/model/types/UserAuthSchema'

export const profileService = {
    uploadAvatar (file: FormData) {
        return $api.post('/users/avatar', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    getProfileData (userId: string) {
        return $api.get<ProfileDataModel>(`/users/${userId}/profile`)
    },
    subscribeOrUnsubscribe (userId: string) {
        return $api.patch<ProfileDataModel>(`/users/${userId}/subscribe`)
    }

}
