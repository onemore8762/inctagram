import { Layout } from 'shared/ui/Layout/Layout'
import { type NextPage } from 'next'
import { type PropsWithChildren, type ReactElement } from 'react'

export const AuthLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export const getAuthLayout = (page: ReactElement) => {
    return <AuthLayout>{page}</AuthLayout>
}
