import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useQuery } from '@tanstack/react-query'
import { AuthService } from 'features/authorization'
import { useRouter } from 'next/router'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { AppRoutes } from 'shared/config/routeConfig/path'

export default function ConfirmEmail () {
    const { query } = useRouter()
    useQuery({
        queryKey: ['confirm'],
        queryFn: () => AuthService.confirmEmail(query.code as string),
        onSuccess: () => {
            routerPush(AppRoutes.AUTH.CONGRATULATIONS)
        },
        onError: () => {
            routerPush(AppRoutes.AUTH.VERIFICATION)
        }
    })
    return <PageLoader/>
}

ConfirmEmail.getLayout = getAuthLayout
