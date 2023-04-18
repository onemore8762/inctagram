import { Layout } from '../Layout'
import { type NextPage } from 'next'
import { type PropsWithChildren, type ReactElement, Suspense } from 'react'
import { Sidebar } from 'widgets/Sidebar'
import cls from './LayoutWithSidebar.module.scss'

export const LayoutWithSidebar: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <Layout>
            <div className={cls.wrapper}>
                <Sidebar/>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className={cls.children}>
                        {children}
                    </div>
                </Suspense>
            </div>
        </Layout>
    )
}

export const getLayoutWithSidebar = (page: ReactElement) => {
    return <LayoutWithSidebar>{page}</LayoutWithSidebar>
}
