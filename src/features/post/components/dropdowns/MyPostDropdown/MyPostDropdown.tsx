import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useCallback, useMemo } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

import { useDeleteMyPost } from 'features/post/model/hooks/useDeleteMyPost'
import IconEdit from 'shared/assets/icons/light/edit-2.svg'
import IconTrash from 'shared/assets/icons/light/trash.svg'
import IconEditOutline from 'shared/assets/icons/outline/edit-2-outline.svg'
import IconThreedots from 'shared/assets/icons/outline/more-horizontal.svg'
import IconTrashOutline from 'shared/assets/icons/outline/trash-outline.svg'

import cls from './MyPostDropdown.module.scss'

interface PostModalDropdownProps {
    postId: string
    onEditPostModal: () => void // для переключения модалки на изменение поста

}
export const MyPostDropdown = ({ postId, onEditPostModal }: PostModalDropdownProps) => {
    const { theme } = useTheme()
    const { deletePost } = useDeleteMyPost(postId)
    const fill = theme === Theme.LIGHT ? '#000000' : '#ffffff'
    const onEditPostClick = useCallback(() => {
        onEditPostModal()
    }, [])
    const onDeletePostClick = useCallback(async () => {
        // TODO: здесь будет запрос на удаление => редирект на profile
        deletePost()
        // routerPush(AppRoutes.PROFILE)
    }, [])
    const icons = useMemo(() => [
        {
            light: <IconEdit aria-hidden="true" fill={fill}/>,
            outline: <IconEditOutline aria-hidden="true" fill={fill}/>,
            iconFunction: onEditPostClick,
            text: 'Edit Post'
        }, {
            light: <IconTrash aria-hidden="true" fill={fill}/>,
            outline: <IconTrashOutline aria-hidden="true" fill={fill}/>,
            iconFunction: onDeletePostClick,
            text: 'Delete Post'
        }
    ], [fill, onEditPostClick, onDeletePostClick])

    return (<>
        <Menu as='div' className={clsx(cls.menu)}>
            <Menu.Button>
                <IconThreedots className={clsx(cls.menu_icon)}/>
            </Menu.Button>
            <Transition
          as={Fragment}
          enter={clsx(cls.enter)}
          enterFrom={clsx(cls.enter_from)}
          enterTo={clsx(cls.enter_to)}
          leave={clsx(cls.leave)}
          leaveFrom={clsx(cls.leave_from)}
          leaveTo={clsx(cls.leave_to)}
            >
                <Menu.Items className={clsx(cls.items)}>
                    {icons.map((icon: any, index) => (
                        <Menu.Item key={index} >
                            {({ active }) => (
                                <button type='button'
                                        className={clsx(cls.item)}
                                        onClick={icon.iconFunction}
                                >
                                    {active
                                        ? icon.light

                                        : icon.outline
                                    }
                                    {icon.text} </button>)}

                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>

    </>

    )
}
