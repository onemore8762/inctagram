import { type FC } from 'react'
import cls from './LoginForm.module.scss'

import { FormWrapper } from 'shared/ui/FormWrapper/FormWrapper'
import { SocialIcons } from 'shared/ui/SocialIcons/SocialIcons'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthService } from 'features/authorization'
import { type UserLoginModel } from 'features/authorization/model/types/UserAuthSchema'
import { useRouter } from 'next/router'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { useValidationForm } from 'features/authorization/model/hooks/useValidationForm'

export const LoginForm: FC = () => {
    const { register, handleSubmit, validErrors: { passwordError, loginError } } =
        useValidationForm(['login', 'password'])

    const queryClient = useQueryClient()
    const { push } = useRouter()

    const { mutate: login, isLoading } = useMutation({
        mutationFn: AuthService.login,
        onSuccess: async () => {
            await queryClient.invalidateQueries(['me']).then(() => push('[locale]/profile/createProfile'))
        }
    })

    const onSubmit = (data: UserLoginModel): void => {
        login(data)
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
            <Button disabled={isLoading} type={'submit'} className={cls.button}>Sign In</Button>
            <p className={cls.text}>Don’t have an account?</p>
            <AppLink active className={'active'} href={AppRoutes.AUTH.REGISTRATION}>Sign Up</AppLink>

        </FormWrapper>
    )
}
