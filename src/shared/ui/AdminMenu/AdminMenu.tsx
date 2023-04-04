import React from 'react'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from '../LangSwitcher/LangSwitcher'
import cls from './AdminMenu.module.scss'
const AdminMenu = () => {
    return (
        <div className={cls.AdminMenu}>
            <ThemeSwitcher/>
            <LangSwitcher/>
        </div>
    )
}

export default AdminMenu
