import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import { useSnackbar } from 'widgets/SnackBar/model/store/snackbarStore'
import { PostService } from '../service/postService'
import { type Comment } from '../types/CommentSchema'

export const useCommentPost = () => {
    const onOpen = useSnackbar((state) => state.onOpen)

    const queryClient = useQueryClient()
    const { mutate: addComment } = useMutation({
        mutationFn: ({ postId, commentContent }: { postId: string, commentContent: Pick<Comment, 'content'> }) =>
            PostService.comment(postId, commentContent),
        onSuccess: async () => {
            // TODO: сделать перезапрос на getPost & улучшить код (см. доп задачи Jira)
            await queryClient.invalidateQueries(['post']).then((res) => { })
        },
        onError: (error: AxiosError<{ message: string }>) => {
            onOpen(error.message, 'danger', 'left')
        }
    })
    return { addComment }
}
