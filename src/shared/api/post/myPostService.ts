import { $api } from 'shared/api/api'
import { type PostsImage, type Post, type NewPost, type PostResponse } from '../../types/post'

export const MyPostService = {
    createPostsImage (file: string) {
        return $api.post<PostsImage>('/posts/image', file)
    },
    createNewPost (newPost: NewPost) {
        return $api.post<PostResponse>('/posts/image', newPost)
    },
    deletePostsImage (uploadId: string) {
        return $api.delete(`/posts/image/${uploadId}`)
    },
    getPost (postId: number) {
        return $api.get<PostResponse>(`/posts/p/${postId}`)
    },
    editPost (postId: number) {
        return $api.put(`/posts/p/${postId}`)
    },
    update (postId: string, newPost: Post) {
        return $api.put<Post>(`/posts/${postId}`, newPost)
    },
    delete (postId: string) {
        return $api.delete(`/posts/${postId}`)
    }

}
