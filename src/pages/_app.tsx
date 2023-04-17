import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { appWithTranslation } from 'next-i18next'
import AdminMenu from 'shared/ui/AdminMenu/AdminMenu'
import { Hydrate } from '@tanstack/react-query'
import { type ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { type NextPage } from 'next'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { AuthRedirect } from 'features/authorization'

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function App ({ Component, pageProps }: AppPropsWithLayout) {
    const router = useRouter()
    const [pageLoading, setPageLoading] = useState<boolean>(false)

    useEffect(() => {
        const handleStart = () => { setPageLoading(true) }
        const handleComplete = () => { setPageLoading(false) }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)
    }, [router])

    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        getLayout(
            <ThemeProvider>
                <AuthRedirect>
                    <AdminMenu/>
                    {pageLoading
                        ? (<PageLoader/>)
                        : (
                            <Hydrate state={pageProps.dehydrateState}>
                                <Component {...pageProps} />
                            </Hydrate>
                        )
                    }
                </AuthRedirect>
            </ThemeProvider>

        )
    )
}

export default appWithTranslation(App)
