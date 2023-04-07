import { $api } from '@/shared/api/api'

export const registrationRequest = (data: { login: string, password: string, email: string }) => {
    return $api.post('auth/registration', data)
        .then((res) => res.data)
}
