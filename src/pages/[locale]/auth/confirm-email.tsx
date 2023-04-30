'use client'
import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from 'features/authorization'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { useEffect } from 'react'
import { type NextPageContext } from 'next'

export default function ConfirmEmail ({ myQuery }: Record<any, any>) {
    const { code } = myQuery
    const { mutate: confirmEmail } = useMutation(AuthService.confirmEmail, {
        mutationKey: ['confirm-email'],
        onSuccess: () => {
            routerPush(AppRoutes.AUTH.CONGRATULATIONS)
        },
        onError: () => {
            routerPush(AppRoutes.AUTH.VERIFICATION)
        }
    })
    useEffect(() => {
        if (code) {
            confirmEmail(code)
        }
    }, [code])

    return <PageLoader/>
}

ConfirmEmail.getInitialProps = async (ctx: NextPageContext) => {
    return { myQuery: ctx.query }
}
ConfirmEmail.getLayout = getAuthLayout
