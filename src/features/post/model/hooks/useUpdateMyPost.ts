import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MyPostService } from '../service/myPostService'
import { type Post } from '../types/PostSchema'

export const useUpdateMyPost = (post: Post) => {
    const queryClient = useQueryClient()

    const { mutate: update } = useMutation({
        mutationFn: (domainPost: Pick<Partial<Post>, 'description' | 'photos' >) => {
            return MyPostService.update(post.id, { ...post, ...domainPost })
        },
        onSuccess: async () => {
        }
    })
    return { update }
}
