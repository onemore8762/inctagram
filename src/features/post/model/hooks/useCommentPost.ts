import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostService } from '../service/postService'

export const useCommentPost = () => {
    const queryClient = useQueryClient()
    const { mutate: comment } = useMutation({
        mutationFn: PostService.comment,
        onSuccess: async () => {
            // TODO: сделать перезапрос на getPost & улучшить код (см. доп задачи Jira)
            await queryClient.invalidateQueries(['post']).then((res) => { })
        }
    })
    return { comment }
}
