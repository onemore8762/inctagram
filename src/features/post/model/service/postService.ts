import { type AxiosError, type AxiosResponse } from 'axios'
import { comment } from 'postcss'

import { $api } from 'shared/api/api'

export const PostService = {
    like () {
        return $api.post<any>('/path')
    },
    comment () {
        return $api.post<any>('/path')
    },
    share () {
        return $api.post<any>('/path')
    },
    addToFavourites () {
        return $api.post<any>('/path')
    }
}
