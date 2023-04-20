import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Modal } from 'shared/ui/Modal/Modal'
import { useConfirmModal } from '../../model/store/modalStore'
import { SelectEmail, useAuth } from 'entities/User'
import { Button } from 'shared/ui/Button/Button'
import cls from './ConfirmModal.module.scss'
interface confirmModalProps {
    className?: string
}

export const ConfirmModal: FC<confirmModalProps> = ({ className }) => {
    const { t } = useTranslation()
    const { isOpen, setIsOpen } = useConfirmModal()
    const email = useAuth(SelectEmail)
    console.log({ email })
    const onCloseHandler = () => { setIsOpen(false) }
    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseHandler}
            title={`${t('Email sent')}`}
            className={clsx(cls.Modal, {}, [className])}
        >
            <div className={cls.content}>
                <div className={cls.text}>{t('We have sent a link to confirm your email to')} {email}</div>
                <Button onClick={onCloseHandler} className={cls.button}>OK</Button>
            </div>
        </Modal>
    )
}
