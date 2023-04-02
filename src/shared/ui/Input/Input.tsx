import cls from './Input.module.scss'
import clsx from 'clsx'

interface InputProps {
    className?: string
}

export const Input = (props: InputProps) => {
    const { className } = props
    return (
        <div className={clsx(cls.Input, {}, [className])}>

        </div>
    )
}
