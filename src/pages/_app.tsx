import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../app/providers/ThemeProvider'

export default function App ({ Component, pageProps }: AppProps) {
    return <ThemeProvider >
        <Component {...pageProps} />
    </ThemeProvider>
}
