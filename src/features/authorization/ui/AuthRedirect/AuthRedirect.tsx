import { useQuery } from '@tanstack/react-query'
import { AuthService } from 'features/authorization'
import { useRouter } from 'next/router'
import { useAuth } from 'entities/User'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { type PropsWithChildren, useEffect } from 'react'

export const AuthRedirect = ({ children }: PropsWithChildren) => {
    const { pathname } = useRouter()
    const { isAuth, setAuth } = useAuth()
    const { isError } = useQuery({
        queryKey: ['me'],
        queryFn: AuthService.me,
        onSuccess: () => {
            setAuth(true)
        },
        onError: () => {
            setAuth(false)
        },
        retry: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    })

    useEffect(() => {
        if (!isAuth && isError && !pathname.includes('auth')) routerPush(AppRoutes.AUTH.LOGIN)
    }, [])
    return <>{children}</>
}
