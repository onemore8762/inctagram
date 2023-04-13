import React, { type FC } from 'react'
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import cls from './AdminMenu.module.scss'
import { Button } from '@/shared/ui/Button/Button'
import { useSnackbar } from '@/widgets/SnackBar/model/store/snackbarStore'

const AdminMenu: FC = () => {
    const onOpen = useSnackbar(state => state.onOpen)
    return (
        <div className={cls.AdminMenu}>
            <ThemeSwitcher/>
            <LangSwitcher/>
            <Button onClick={() => { onOpen('Testtt', 'danger', 'center') }}>danger</Button>
            <Button onClick={() => { onOpen('Testtt', 'warning', 'left') }}>warning</Button>
            <Button onClick={() => { onOpen('Testtt', 'success', 'right') }}>success</Button>
        </div>
    )
}

export default AdminMenu
