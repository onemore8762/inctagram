import { type AxiosError, type AxiosResponse } from 'axios'
import { comment } from 'postcss'

import { $api } from 'shared/api/api'
import { type Post } from '../types/PostSchema'

// TODO: доделать API
// TODO: сделать enum для API routes
export const PostService = {
    like () {
        return $api.get<any>('/path')
    },
    comment () {
        return $api.get<any>('/path')
    },
    share () {
        return $api.get<any>('/path')
    },

    report () {
        return $api.get<any>('/path')
    }
}
