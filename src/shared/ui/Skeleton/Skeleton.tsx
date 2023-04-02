import cls from './Skeleton.module.scss'
import clsx from 'clsx'

interface SkeletonProps {
    className?: string
}

export const Skeleton = (props: SkeletonProps) => {
    const { className } = props
    return (
        <div className={clsx(cls.Skeleton, {}, [className])}>

        </div>
    )
}
