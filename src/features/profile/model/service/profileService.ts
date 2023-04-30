import { $api } from '../../../../shared/api/api'

export const profileService = {
    uploadAvatar (file: FormData) {
        return $api.post('/users/avatar', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
