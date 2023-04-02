import cls from './AppLink.module.scss'
import clsx from 'clsx'

interface AppLinkProps {
    className?: string
}

export const AppLink = (props: AppLinkProps) => {
    const { className } = props
    return (
        <div className={clsx(cls.AppLink, {}, [className])}>

        </div>
    )
}
