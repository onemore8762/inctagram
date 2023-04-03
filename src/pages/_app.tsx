import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { Layout } from 'shared/ui/Layout/Layout'

export default function App ({ Component, pageProps }: AppProps) {
    return <ThemeProvider >
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
}
