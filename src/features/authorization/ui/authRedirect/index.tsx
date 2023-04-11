import { useQuery } from '@tanstack/react-query'
import { AuthService } from '@/features/authorization'
import { useRouter } from 'next/router'
import { type PropsWithChildren } from 'react'
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader'

// eslint-disable-next-line react/prop-types
export const AuthRedirect: React.FC<PropsWithChildren> = ({ children }) => {
    // debugger
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
    console.log(data)
    const { pathname, push } = useRouter()
    if (isLoading) {
        return <PageLoader/>
    }
    // if (isError && !pathname.includes('/[locale]/auth/login') && !pathname.includes('/[locale]/auth/registration')) {
    //     void push('/ru/auth/login')
    // }
    if (isError && pathname !== '/[locale]/auth/login' &&
        pathname !== '/[locale]/auth/registration' && pathname !== '/[locale]/auth/confirm-message') {
        void push('/ru/auth/login')
    }

    return <>{children}</>
}
