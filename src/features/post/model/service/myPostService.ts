import { $api } from 'shared/api/api'
import { type Comment } from '../types/CommentSchema'
import { type Post } from '../types/PostSchema'

export const MyPostService = {
    update (postId: string, newPost: Post) {
        return $api.put<Post>(`/posts/${postId}`, newPost)
    },
    delete (postId: string) {
        return $api.delete(`/posts/${postId}`)
    }
}
