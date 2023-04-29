
import React, {
    type ChangeEvent, type FC, useState, type FormEvent,
    type Dispatch, type SetStateAction
} from 'react'
import { useConfirmModal } from '../../../authorization'
import { useMutation } from '@tanstack/react-query'
import { Modal } from '../../../../shared/ui/Modal/Modal'
import cls from './AvatarModal.module.scss'
import { Button } from '../../../../shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { type AxiosError } from 'axios'
import { useSnackbar } from '../../../../widgets/SnackBar/model/store/snackbarStore'
import { profileService } from '../../model/service/profileService'

const AvatarDynamicImport =
    dynamic(() => import('../uploadAvatar/AvatarDynamicImport'), { ssr: false })
interface confirmModalProps {
    className?: string
    setAvatar: Dispatch<SetStateAction<string | undefined>>
}
export const AvatarModal: FC<confirmModalProps> = ({ className, setAvatar }) => {
    const { t } = useTranslation()
    const { isOpen, setIsOpen } = useConfirmModal()
    const [image, setImage] = useState<File>()
    const [preview, setPreview] = useState<string>()
    const onOpen = useSnackbar((state) => state.onOpen)
    const onCloseHandler = () => { setIsOpen(false) }
    const fileReader = new FileReader()
    const { mutate: uploadAvatar } = useMutation(profileService.uploadAvatar, {
        mutationKey: ['uploadAvatar'],
        onSuccess: () => {
            setAvatar(preview)
            setIsOpen(false)
        },
        onError: (res: AxiosError<{ message: string }>) => {
            onOpen(res.message, 'danger', 'left')
        }
    })
    const onClose = () => {
        setPreview(undefined)
    }
    const onCrop = (view: string) => {
        setPreview(view)
    }
    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0]
            setImage(file)
            fileReader.readAsDataURL(file)
        }
    }
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData()
        image && formData.append('file', image)
        uploadAvatar(formData)
        setImage(undefined)
    }
    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseHandler}
            title={`${t('Add a profile photo')}`}
            className={clsx(cls.Modal, {}, [className])}
        >
            <div className={cls.content}>
                <form onSubmit={submit}>
                    <div className={cls.flex}>
                        <AvatarDynamicImport
                            width={300}
                            height={300}
                            onBeforeFileLoad={handlerChange}
                            onClose={onClose}
                            onCrop={onCrop}
                        />
                        <Button className={cls.button} type={'submit'} disabled={!image}>Save</Button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
