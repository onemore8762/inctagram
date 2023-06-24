import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { PostModalActions } from 'widgets/Post/ui/actions/PostModalActions/PostModalActions'
import { MyPostDropdown } from 'widgets/Post/ui/dropdowns/MyPostDropdown/MyPostDropdown'
import { Post } from 'widgets/Post/ui/modals/BaseModal'
import { GetPostModal } from 'features/post'
import { MyPostService } from 'shared/api/post/myPostService'

// {
//     "id": "dc283429-556f-453c-8d1a-a5d6d130f447",
//     "photos": [],
//     "description": "Zhanat's post",
//     "createdAt": "2023-06-08T07:05:50.088Z",
//     "updatedAt": "2023-06-08T07:05:50.088Z",
//     "extendedLikesInfo": {
//         "likesCount": 0,
//         "dislikesCount": 0,
//         "myStatus": "None",
//         "newestLikes": []
//     }
// }

const PostModal = () => {
    // const { mutate: createPost } = useMutation({
    //     mutationFn: MyPostService.create,
    //     onSuccess: async () => {
    //     }
    // })

    // const onCreatePostHandler = () => {
    //     createPost({
    //         description: "Zhanat's post",
    //         files: 'MULTIPART FORM DATA'
    //     })
    // }

    const postId = 'dc283429-556f-453c-8d1a-a5d6d130f447'
    // const { isLoading, error, data } = useQuery(['post', postId], () => MyPostService.get(postId))
    // console.log({ isLoading, error, data })

    // console.log({ avatar })
    return (
        <>
            <Post postId={postId}
                  headerActions={<MyPostDropdown />}
                  content={<GetPostModal postId={postId} />}
                  actionsSlot={<PostModalActions postId={postId} />} />
        </>
    )
}

export default PostModal
