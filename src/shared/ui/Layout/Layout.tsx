import { type FC, type PropsWithChildren, Suspense } from 'react'
import { Header } from 'widgets/Header'
import cls from './Layout.module.scss'
import { Container } from 'shared/ui/Container/Container'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const font = Inter({
    subsets: ['latin'],
    display: 'swap'
})
export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={clsx(cls.layout, font.className)}>
            <Header />
            <main className={cls.main}>
                <Container>
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </Container>
            </main>
        </div>
    )
}
