import { type FC, type PropsWithChildren, Suspense } from 'react'
import { Header } from 'widgets/Header'
import cls from './Layout.module.scss'
import { Container } from 'shared/ui/Container/Container'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { SnackBar } from 'widgets/SnackBar'
import { Sidebar } from 'widgets/Sidebar'

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
                    <Sidebar/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <div style={{ width: '100%' }}>
                            {children}
                        </div>
                    </Suspense>
                </Container>
                <SnackBar />
            </main>
        </div>
    )
}
