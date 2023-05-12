import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostService } from '../service/postService'

export const useSharePost = () => {
    const queryClient = useQueryClient()
    const { mutate: share } = useMutation({
        mutationFn: PostService.share,
        onSuccess: async () => {
            // TODO: сделать перезапрос на getPost & улучшить код (см. доп задачи Jira)
            await queryClient.invalidateQueries(['post']).then((res) => { })
        }
    })
    return { share }
}
