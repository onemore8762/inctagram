import { Button } from '@/shared/ui/Button/Button'
import Image, { type StaticImageData } from 'next/image'
import cls from './Info.module.scss'
import clsx from 'clsx'

interface InfoPageProps {
    title: string
    text: string
    image: StaticImageData
    buttonText: string
}

export function Info (props: InfoPageProps) {
    const {
        title,
        text,
        image,
        buttonText
    } = props
    return (
        <div className={clsx(cls.container)}>
            <h1 className={clsx(cls.title)}>{title}</h1>
            <p className={clsx(cls.text)}>{text}</p>
            <div className={clsx(cls.button)} ><Button block>{buttonText}</Button></div>
            <Image src={image} alt={'Img'} className={clsx(cls.image)}/>
        </div>
    )
}
