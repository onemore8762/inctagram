import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../../next-i18next.config'

// export default function Document () {
//     const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
//     return (
//         <Html lang="en">
//             <Head>
//                 <link rel="preconnect" href="https://fonts.googleapis.com"/>
//                 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
//                 <link href={'https://fonts.googleapis.com/css2?family=' +
//                     'Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'} rel="stylesheet"/>
//             </Head>
//             <body>
//                 <Main/>
//                 <NextScript/>
//             </body>
//         </Html>
//     )
// }
class MyDocument extends Document {
    render () {
        const currentLocale = this.props?.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
        return (
            <Html lang={currentLocale as string}>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                    <link href={'https://fonts.googleapis.com/css2?family=' +
                        'Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'} rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
