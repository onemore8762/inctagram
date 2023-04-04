import { Portal } from 'shared/ui/Portal/Portal'
import { type FC, type PropsWithChildren } from 'react'
import { ModalLayout } from 'shared/ui/ModalLayout/ModalLayout'

interface ModalProps {
    title: string
    isOpen: boolean
    onClose: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) {
        return null
    }

    return (
        <Portal>
            <ModalLayout title={title} onClose={onClose}>
                {children}
            </ModalLayout>
        </Portal>
    )
}
