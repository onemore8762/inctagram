import clsx from 'clsx'
import { useState } from 'react'
import { useCommentPost } from 'features/post/model/hooks/useCommentPost'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './AddCommentBox.module.scss'
interface AddCommentBoxProps {
    postId: string
}
export const AddCommentBox = ({ postId }: AddCommentBoxProps) => {
    const [text, setText] = useState('')
    const { addComment } = useCommentPost()
    const onAddCommentClick = async () => {
        addComment({ postId, commentContent: { content: text } })
    }

    return <div className={clsx(cls.container)}>
        <Input onChange={(e) => { setText(e.currentTarget.value) }} className={clsx(cls.input)}
               placeholder='Add a Comment...'
        />
        <Button onClick={onAddCommentClick} className={clsx(cls.button)} theme={'textButton'}>Publish</Button>
    </div>
}
