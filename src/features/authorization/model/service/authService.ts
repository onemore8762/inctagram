import { type AxiosError, type AxiosResponse } from 'axios'
import { $api } from '@/shared/api/api'
import { type UserAuthModel, type UserLoginModel, type UserRegistrationModel } from '../types/UserAuthSchema'

export const AuthService = {
    me () {
        return $api.get<UserAuthModel>('auth/me')
    },

    login (params: UserLoginModel) {
        return $api.post<UserLoginModel, AxiosResponse<{ accessToken: string }>>('auth/login', params)
            .then((response) => {
                localStorage.setItem('token', response.data.accessToken)
            })
    },

    logout () {
        return $api.post('auth/logout').then(() => { localStorage.removeItem('token') })
    },

    registration (params: UserRegistrationModel) {
        return $api.post('auth/registration', params)
            .catch((e: AxiosError<{ message: string }>) => {
                console.log(e.response?.data.message)// "User already exists"
            })
    },

    registrationConfirm (code: string) {
        return $api.post<{ code: string }>('auth/registration-confirmation', { code })
            .catch((e: AxiosError<{ message: string }>) => {
                console.log(e.response?.data.message)// "User already exists"
            })
    }
}
