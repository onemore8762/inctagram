import React from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import ArrowForwardIcon from 'shared/assets/icons/general/arrow-forward.svg'
import CloseIcon from 'shared/assets/icons/general/close.svg'
import { Modal } from 'shared/ui'

import cls from './styles.module.scss'

interface IProps {
    content: React.ReactNode
    isOpen: boolean
    id: number
    handleClose: () => void
}

export const PostModal: React.FC<IProps> = (props) => {
    const {
        content, isOpen, handleClose, id
    } = props
    const { theme } = useTheme()
    const fill = theme === Theme.LIGHT ? '#000000' : '#ffffff'

    return (
        <Modal id={id} isOpen={isOpen} onClose={handleClose} withHeader={false} withStyles={false}>
            <div className={cls.container}>
                <div className={cls.closeIconContainer} onClick={handleClose}>
                    <CloseIcon fill={fill} />
                </div>
                {content}
                <div className={cls.nextIconContainer}>
                    <ArrowForwardIcon fill={fill} />
                </div>
            </div>
        </Modal>
    )
}
