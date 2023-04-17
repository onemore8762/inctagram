import { type PropsWithChildren } from 'react'
import { Header } from 'widgets/Header'
import cls from './Layout.module.scss'
import { Container } from 'shared/ui/Container/Container'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { SnackBar } from 'widgets/SnackBar'
import { type NextPage } from 'next'

const font = Inter({
    subsets: ['latin'],
    display: 'swap'
})
export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <div className={clsx(cls.layout, font.className)}>
            <Header/>
            <main className={cls.main}>
                <Container>
                    {children}
                </Container>
                <SnackBar/>
            </main>
        </div>
    )
}
