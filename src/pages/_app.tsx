import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { appWithTranslation } from 'next-i18next'
import { Layout } from 'shared/ui/Layout/Layout'
import AdminMenu from '../shared/ui/AdminMenu/AdminMenu'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App ({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider >
                <Layout>
                    <AdminMenu/>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
export default appWithTranslation(App)
