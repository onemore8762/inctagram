import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { appWithTranslation } from 'next-i18next'

function App ({ Component, pageProps }: AppProps) {
    return <ThemeProvider >
        <Component {...pageProps} />
    </ThemeProvider>
}
export default appWithTranslation(App)
