import { type AxiosError, type AxiosResponse } from 'axios'
import { comment } from 'postcss'

import { $api } from 'shared/api/api'
import { type Post } from '../types/PostSchema'

export const MyPostService = {
    update (postId: string, newPost: Post) {
        return $api.put<Post>(`/posts/${postId}`, newPost)
    },
    delete (postId: string) {
        return $api.delete(`/posts/${postId}`)
    }

}
