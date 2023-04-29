import React, { useState } from 'react'
import { useConfirmModal } from '../../../authorization'
import { AvatarModal } from '../avatarModal/AvatarModal'
import cls from './UploadAvatar.module.scss'
import { Avatar } from '../../../../shared/ui/Avatar/Avatar'
import { Button } from '../../../../shared/ui/Button/Button'

export const UploadAvatar = () => {
    const [avatar, setAvatar] = useState<string>()
    const { setIsOpen } = useConfirmModal()
    const handlerPick = () => {
        setIsOpen(true)
    }
    const clickHandler = () => {
        setAvatar(undefined)
    }
    return <>
        <AvatarModal setAvatar={setAvatar} />
        <div>
            {avatar
                ? <div className={cls.avatar}>
                    <Avatar size={192} src={avatar} />
                    <button className={cls.imageButton} onClick={clickHandler} type={'button'}></button>
                </div>
                : <Avatar size={192} src={avatar} />}

        </div>
        <Button theme={'outline'} onClick={handlerPick}>Add a profile photo</Button>
    </>
}
