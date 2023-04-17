import { type PropsWithChildren, useState } from 'react'
import { Header } from 'widgets/Header'
import cls from './Layout.module.scss'
import { Container } from 'shared/ui/Container/Container'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { SnackBar } from 'widgets/SnackBar'
import { type NextPage } from 'next'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/query-core'

const font = Inter({
    subsets: ['latin'],
    display: 'swap'
})
export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <div className={clsx(cls.layout, font.className)}>
                <Header/>
                <main className={cls.main}>
                    <Container>
                        {children}
                    </Container>
                    <SnackBar/>
                </main>
            </div>
        </QueryClientProvider>
    )
}
