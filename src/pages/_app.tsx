import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { appWithTranslation } from 'next-i18next'
import { Layout } from 'shared/ui/Layout/Layout'
import AdminMenu from '../shared/ui/AdminMenu/AdminMenu'

function App ({ Component, pageProps }: AppProps) {
    return <ThemeProvider >
        <Layout>
            <AdminMenu/>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
}
export default appWithTranslation(App)
