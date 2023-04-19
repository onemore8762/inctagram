import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from 'features/authorization'
import { useRouter } from 'next/router'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { useEffect } from 'react'

export default function ConfirmEmail () {
    const { query } = useRouter()

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
        if (query.code) {
            confirmEmail(query.code as string)
        }
    }, [])

    return <PageLoader/>
}

ConfirmEmail.getLayout = getAuthLayout
