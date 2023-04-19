import { type FC } from 'react'
import cls from './LoginForm.module.scss'

import { FormWrapper } from 'shared/ui/FormWrapper/FormWrapper'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthService } from 'features/authorization'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { useValidationForm } from 'features/authorization/model/hooks/useValidationForm'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { type AxiosError } from 'axios'
import { SocialIcons } from 'shared/ui/SocialIcons/SocialIcons'

export const LoginForm: FC = () => {
    const { register, handleSubmit, validErrors: { passwordError, loginError } } =
    useValidationForm(['login', 'password'])

    const queryClient = useQueryClient()

    const { mutate: login, isLoading, error } = useMutation<any, AxiosError<{ message: string }>, any>({
        mutationFn: AuthService.login,
        retry: false,
        onSuccess: async () => {
            await queryClient.invalidateQueries(['me']).then(() => {
                routerPush(AppRoutes.CREATE_PROFILE)
            })
        }
    })

    const onSubmit = (data: { login: string, password: string }): void => {
        login({ password: data.password, loginOrEmail: data.login })
    }

    return (
        <FormWrapper className={cls.login} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={cls.title}>Sign In</h2>
            <SocialIcons/>
            <Input
                {...register('login')}
                type={'text'}
                placeholder={'Email or Login'}
                error={!!loginError}
                errorText={loginError}
                className={cls.input}/>
            <Input
                {...register('password')}
                type={'password'}
                placeholder={'Password'}
                error={!!passwordError}
                errorText={passwordError}
                className={cls.input}/>
            <p className={cls.link}><AppLink href={'/auth/forgot'}>Forgot Password</AppLink></p>
            {error?.response?.data.message && <p className={cls.error}>{error.response.data.message}</p>}
            <Button data-testid='sign-in-submit' disabled={isLoading} type={'submit'}
                    className={cls.button}>Sign In</Button>
            <p className={cls.text}>Don’t have an account?</p>
            <AppLink active className={'active'} href={AppRoutes.AUTH.REGISTRATION}>Sign Up</AppLink>

        </FormWrapper>
    )
}
