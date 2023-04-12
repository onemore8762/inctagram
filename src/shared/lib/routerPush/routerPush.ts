import router from 'next/router'

interface routerPushProps {
    href?: string
    locale?: string | string[]
    skipLocaleHandling?: any
}

const routerPush = (props: routerPushProps) => {
    const locale = props.locale || router.query.locale || ''
    let href = props.href || router.asPath
    if (href.indexOf('http') === 0) props.skipLocaleHandling = true
    if (locale && !props.skipLocaleHandling) {
        href = href
            ? `/${locale as string}${href}`
            : router.pathname.replace('[locale]', locale as string)
    }
    void router.push(href)
}
// не работает в данный момент
