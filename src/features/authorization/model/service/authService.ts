import { type AxiosError, type AxiosResponse } from 'axios'

import {
    type PasswordRecoveryModel,
    type UserCreatePasswordModel, type UserAuthModel,
    type UserLoginModel, type UserRegistrationModel
} from '../types/UserAuthSchema'
import { $api } from 'shared/api/api'

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
        return $api.post<null, AxiosResponse, UserRegistrationModel>('auth/registration', params)
    },

    confirmEmail (code: string) {
        return $api.post('auth/confirm-email', { code })
    },
    createPassword (params: UserCreatePasswordModel) {
        console.log(params)
        return $api.post('/auth/new-password', params).catch((e: AxiosError<{ message: string }>) => {
            console.log(e.response?.data.message)
        })
    },

    passwordRecovery (params: PasswordRecoveryModel) {
        return $api.post('auth/password-recovery', params)
    }
}
