import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { appWithTranslation } from 'next-i18next'
import { Layout } from 'shared/ui/Layout/Layout'

function App ({ Component, pageProps }: AppProps) {
    return <ThemeProvider >
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
}
export default appWithTranslation(App)
