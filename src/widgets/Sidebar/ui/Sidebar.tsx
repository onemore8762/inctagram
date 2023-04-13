import cls from './Sidebar.module.scss'
import clsx from 'clsx'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props
    return (
        <div className={clsx(cls.Sidebar, [className])}>

        </div>
    )
}
