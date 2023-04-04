import cls from './Skeleton.module.scss'
import clsx from 'clsx'

interface SkeletonProps {
    className?: string
    width: number
    height: number
    borderRadius: number
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        borderRadius
    } = props
    return (
        <div className={clsx(cls.Skeleton, [className, cls[width], cls[height], cls[borderRadius]])}
             style={{ width: `${width}px`, height: `${height}px` }}>
            <div className={clsx(cls.animation)}></div>
        </div>
    )
}
