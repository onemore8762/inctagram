import { type FC, type PropsWithChildren } from 'react'
import { Header } from 'widgets/Header'
import cls from './Layout.module.scss'
import { Container } from 'shared/ui/Container/Container'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={cls.layout}>
            <Header />
            <main className={cls.main}>
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    )
}
