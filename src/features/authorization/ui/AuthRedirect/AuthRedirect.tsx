import { useQuery } from '@tanstack/react-query'
import { AuthService } from '@/features/authorization'
import { useRouter } from 'next/router'
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader'
import { useAuth } from '@/entities/User'
import { AppRoutes } from '@/shared/config/routeConfig/path'
import { routerPush } from '@/shared/lib/routerPush/routerPush'

export const AuthRedirect = ({ children, authOff }: any) => {
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
    if (!authOff && !isAuth && isError && !pathname.includes('auth')) routerPush(AppRoutes.AUTH.LOGIN)
    return <>{children}</>
}
