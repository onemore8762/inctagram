import React, { type FC } from 'react'
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher'
import cls from './AdminMenu.module.scss'

const AdminMenu: FC = () => {
    return (
        <div className={cls.AdminMenu}>
            <ThemeSwitcher/>
            <LangSwitcher/>
        </div>
    )
}

export default AdminMenu
