
import { type FC } from 'react'
import { useValidationForm } from 'features/auth/lib/useValidationForm'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { AppLink, Button, FormWrapper, Input, SocialIcons } from 'shared/ui'
import { useLogin } from '../../model'
import cls from './LoginForm.module.scss'

export const LoginForm: FC = () => {
    const { register, handleSubmit, validErrors: { passwordError, loginError } } =
      useValidationForm(['login', 'password'])

    const { login, isLoading, error } = useLogin()
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
            <p className={cls.link}><AppLink href={'/auth/password-recovery'}>Forgot Password</AppLink></p>
            {error?.response?.data.message && <p className={cls.error}>{error.response.data.message}</p>}
            <Button data-testid='sign-in-submit' disabled={isLoading} type={'submit'}
                    className={cls.button}>Sign In</Button>
            <p className={cls.text}>Don’t have an account?</p>
            <AppLink active className={'active'} href={AppRoutes.AUTH.REGISTRATION}>Sign Up</AppLink>

        </FormWrapper>
    )
}
