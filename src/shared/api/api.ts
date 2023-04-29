import axios from 'axios'

export const API_URL = 'http://92.255.109.36:3000'

interface RefreshTokenResponse {
    accessToken: string
}

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token') || ''}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.post<RefreshTokenResponse>(
                `${API_URL}auth/refresh-token`,
                {},
                { withCredentials: true })

            localStorage.setItem('token', response.data.accessToken)
            return await $api.request(originalRequest)
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error
})
