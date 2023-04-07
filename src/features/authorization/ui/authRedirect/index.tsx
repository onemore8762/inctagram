import {useQuery} from "@tanstack/react-query"
import {AuthService} from "@/features/authorization";
import {useRouter} from "next/router";
import {PropsWithChildren} from "react";

export const AuthRedirect: React.FC<PropsWithChildren> = ({children}) => {
    const {data, isLoading, isError} = useQuery({
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
    const {pathname, push} = useRouter()
    if (isLoading) {
        return <div>loading...</div>
    }
    if (isError && pathname !== '/ru/auth/login' &&  pathname !== '/ru/auth/registration') {
        push('/ru/auth/login')
    }

    return <>{children}</>
}