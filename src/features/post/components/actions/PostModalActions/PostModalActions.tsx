import clsx from 'clsx'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { useAddToFavouritesPost } from 'features/post/model/hooks/useAddToFavouritesPorst'
import { useLikePost } from 'features/post/model/hooks/useLikePost'
import { useSharePost } from 'features/post/model/hooks/useSharePost'
import { ActionIcon } from 'features/post/ui/ActionIcon/ActionIcon'
import IconShareOutline from 'shared/assets/icons/general/paper-plane.svg'
import IconFavouritesOutline from 'shared/assets/icons/light/bookmark.svg'
import IconLike from 'shared/assets/icons/light/heart.svg'
import IconFavourites from 'shared/assets/icons/outline/bookmark-outline.svg'
import IconLikeOutline from 'shared/assets/icons/outline/heart-outline.svg'
import cls from './PostModalActions.module.scss'

interface PostModalActionsProps {

    postId: string
}

export const PostModalActions = ({ postId, ...restProps }: PostModalActionsProps) => {
    const { theme } = useTheme()

    const fill = theme === Theme.LIGHT ? '#000000' : '#ffffff'
    const { like } = useLikePost()
    const { share } = useSharePost()
    const { addToFavourites } = useAddToFavouritesPost(postId)

    const onLikeIconClick = async () => {
        // like()
        return new Promise<void>((resolve) => { resolve() })
    }
    const onShareIconClick = () => {
        // share()
        return new Promise<void>((resolve) => { resolve() })
    }

    const onFavouritesIconClick = () => {
        addToFavourites()
    }

    return (<div className={clsx(cls.container)}>
        <div className={clsx(cls.left_group)}>
            <ActionIcon filledIcon={<IconLike fill={fill}/>}
                        outlineIcon={<IconLikeOutline fill={fill}/>} onClick={onLikeIconClick} />
            <ActionIcon filledIcon={<IconShareOutline fill={fill}/>}
                        outlineIcon={<IconShareOutline fill={fill}/>} onClick={onShareIconClick} />
        </div>

        <ActionIcon filledIcon={<IconFavouritesOutline fill={fill}/>}
                    outlineIcon={<IconFavourites fill={fill} />}
                    onClick={onFavouritesIconClick} />
    </div>)
}
