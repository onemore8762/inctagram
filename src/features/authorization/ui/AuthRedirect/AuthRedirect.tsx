import { useQuery } from '@tanstack/react-query'
import { AuthService } from '@/features/authorization'
import { useRouter } from 'next/router'
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader'
import { useAuth } from '@/entities/User'
import { AppRoutes } from '@/shared/config/routeConfig/path'
import { routerPush } from '@/shared/lib/routerPush/routerPush'
import { type FC, type PropsWithChildren } from 'react'

export const AuthRedirect: FC<PropsWithChildren> = ({ children }) => {
    const { isLoading, isError } = useQuery({
        queryKey: ['me'],
        queryFn: AuthService.me,
        retry: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    })
    const { pathname } = useRouter()

    const { isAuth } = useAuth()

    if (isLoading) {
        return <PageLoader/>
    }

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
