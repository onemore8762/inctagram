import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { appWithTranslation } from 'next-i18next'
import { Layout } from 'shared/ui/Layout/Layout'
import AdminMenu from '../shared/ui/AdminMenu/AdminMenu'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader'
import { AuthRedirect } from '@/features/authorization'

function App ({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient())
    const router = useRouter()
    const [pageLoading, setPageLoading] = useState<boolean>(false)
    useEffect(() => {
        const handleStart = () => { setPageLoading(true) }
        const handleComplete = () => { setPageLoading(false) }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)
    }, [router])

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <Layout>
                    <AuthRedirect>
                        <AdminMenu/>
                        {pageLoading
                            ? (<PageLoader/>)
                            : <Component {...pageProps} />
                        }
                    </AuthRedirect>
                </Layout>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default appWithTranslation(App)
