import { type AxiosError, type AxiosResponse } from 'axios'
import { comment } from 'postcss'
import { type Post } from 'shared/types/post'

import { $api } from 'shared/api/api'

// TODO: доделать API
// TODO: сделать enum для API routes
export const UsersService = {

    addToFavourites (postId: string) {
        return $api.post<Post>(`/users-posts/${postId}`)
    }

}
