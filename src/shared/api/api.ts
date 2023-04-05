import axios from 'axios'

export const API_URL = 'https://blogs-nest-torm.vercel.app/'

interface AuthResponse {
    'accessToken': 'string'
}

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token') || ''}`
    return config
})

// $api.interceptors.response.use((config) => {
//     return config
// }, async (error) => {
//     const originalRequest = error.config
//     console.log(error)
//     if (error.response?.status === 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true
//         try {
//             const response = await $api.post<AuthResponse>('/auth/refresh-token', { withCredentials: true })
//             localStorage.setItem('token', response.data.accessToken)
//             return await $api.request(originalRequest)
//         } catch (e) {
//             console.log('НЕ АВТОРИЗОВАН')
//         }
//     }
//     throw error
// })

export const AuthService = {
    async me () {
        return await $api.get('auth/me')
            .catch((e) => { console.log('error') })
    },
    async refresh () {
        return await $api.post('auth/refresh-token', {
            accessToken: localStorage.getItem('token')
        })
            .catch((e) => { console.log('error') })
    },
    async login () {
        await $api.post('auth/login', {
            loginOrEmail: 'Deniska',
            password: 'Deniska'
        }).then((response) => {
            localStorage.setItem('token', response.data.accessToken)
        })
    },
    async logout () {
        await $api.post('auth/logout').then(() => {
            localStorage.clear()
        }).catch((e) => { console.log('error') })
    },
    async registration () {
        return await $api.post('auth/registration', {
            email: 'denis.churkin.afikei@mail.ru',
            login: 'Deniska',
            password: 'Deniska'
        }).catch((e) => { console.log('error') })
    },
    async registrationConfirm () {
        return await $api.post('auth/registration-confirmation', {
            code: '08e3d51c-7536-4c7e-be25-c3049c82a266'
        }).catch((e) => { console.log('error') })
    }
    // async checkAuth () {
    //     try {
    //         const response = await axios.post<AuthResponse>('auth/refresh-token')
    //         localStorage.setItem('token', response.data.accessToken)
    //     } catch (e) {
    //         // @ts-ignore
    //         console.log(e.response?.data?.message)
    //     }
    // }
}
