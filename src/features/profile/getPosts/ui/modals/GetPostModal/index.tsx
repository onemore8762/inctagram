import { format } from 'date-fns'
import React from 'react'
import { AddCommentBox } from 'features/post'
import { CreationDate } from 'entities/Post/ui/CreationDate'
import { Header } from 'entities/Post/ui/Header'
import { LikesInfo } from 'entities/Post/ui/LikesInfo'
import { PostModal } from 'entities/Post/ui/Modal'
import catImg from 'shared/assets/images/MicrosoftTeams-image.png'
import { Card } from 'shared/ui/Card/Card'
import cls from './styles.module.scss'

interface IProps {
    actionsSlot: React.ReactNode
    headerActions: React.ReactNode
    content: React.ReactNode
    post: any
    id: number
    isOpen: boolean
    userName: string
    handleClose: () => void
}

export const GetPostModal: React.FC<IProps> = (props) => {
    const {
        actionsSlot, content, headerActions,
        post, isOpen, handleClose, id, userName
    } = props

    const creationDate = post?.createdAt ? format(new Date(post?.createdAt), 'MMMM d, Y') : ''

    return (
        <PostModal
        id={id}
        isOpen={isOpen}
        handleClose={handleClose}
        content={ <>
            <Card cardWrapperClassName={cls.cardWrapperClassName}
                  src={post?.images[0]?.url || ''}
                  alt="card" />

            <div className={cls.rightBlock}>
                <div className={cls.header}>
                    <Header avatarURL={catImg.src} title={userName} />
                    <div>{headerActions}</div>
                </div>
                {content}
                <div className={cls.bottomSection}>
                    {actionsSlot}
                    <div className={cls.wrapper}>
                        <LikesInfo />
                        <CreationDate date={creationDate} />
                    </div>
                </div>
                <AddCommentBox postId="1" />
            </div></>} />
    )
}
