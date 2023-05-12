import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostService } from '../service/postService'

export const useAddToFavouritesPost = () => {
    const queryClient = useQueryClient()
    const { mutate: addToFavourites } = useMutation({
        mutationFn: PostService.addToFavourites,
        onSuccess: async () => {
            // TODO: сделать перезапрос на getPost & улучшить код (см. доп задачи Jira)
            await queryClient.invalidateQueries(['post']).then((res) => { })
        }
    })
    return { addToFavourites }
}
