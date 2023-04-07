import { useQuery } from '@tanstack/react-query'
import { AuthService } from '@/features/authorization'
import router, { useRouter } from 'next/router'
import { type PropsWithChildren } from 'react'

// eslint-disable-next-line react/prop-types
export const AuthRedirect: React.FC<PropsWithChildren> = ({ children }) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['me'],
        queryFn: AuthService.me,
        retry: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    })
    console.log(data)
    const { pathname } = useRouter()
    if (isLoading) {
        return <div>loading...</div>
    }
    if (isError) {
        if (pathname === '/ru/auth/login' || pathname !== '/ru/auth/registration') {
            console.log(error)
        } else {
            void router.push('/ru/auth/login')
        }
    }

    return <>{children}</>
}
