import cls from './Header.module.scss'
import clsx from 'clsx'

interface HeaderProps {
    className?: string
}

export const Header = (props: HeaderProps) => {
    const { className } = props
    return (
        <div className={clsx(cls.Header, {}, [className])}>

        </div>
    )
}
