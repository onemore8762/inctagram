import cls from './Header.module.scss'
import clsx from 'clsx'
import { AppLink } from '../../../shared/ui/AppLink/AppLink'
import { Container } from 'shared/ui/Container/Container'

interface HeaderProps {
    className?: string
}

export const Header = (props: HeaderProps) => {
    const { className } = props
    return (
        <header className={clsx(cls.Header, [className])}>
            <Container>
                <AppLink className={cls.HeaderText} href={'/'}>Inctagram</AppLink>
            </Container>
        </header>
    )
}
