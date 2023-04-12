import { useQuery } from '@tanstack/react-query'
import { AuthService } from '@/features/authorization'
import { useRouter } from 'next/router'
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader'
import { useAuth } from '@/entities/User'
import { AppRoutes } from '@/shared/config/routeConfig/path'
import { routerPush } from '@/shared/lib/routerPush/routerPush'

export const AuthRedirect = ({ children }: any) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['me'],
        queryFn: AuthService.me,
        retry: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    })
    const { pathname, push } = useRouter()
    const { isAuth } = useAuth()
    if (isLoading) {
        return <PageLoader/>
    }
    // if (isError && !pathname.includes('/[locale]/auth/login') && !pathname.includes('/[locale]/auth/registration')) {
    //     void push('/ru/auth/login')
    // }
    if (!isAuth && isError &&
        pathname !== `/[locale]${AppRoutes.AUTH.LOGIN}` &&
        pathname !== `/[locale]${AppRoutes.AUTH.REGISTRATION}` &&
        pathname !== `/[locale]${AppRoutes.AUTH.CONGRATULATIONS}` &&
        pathname !== `/[locale]${AppRoutes.AUTH.VERIFICATION}`

    ) {
        routerPush(AppRoutes.AUTH.LOGIN)
    }

    return <>{children}</>
}
