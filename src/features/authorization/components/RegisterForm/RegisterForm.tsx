import { useMutation } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import clsx from 'clsx'
import { type FC, memo, useCallback, useMemo } from 'react'
import { AuthService, useConfirmModal } from 'features/authorization'
import { useValidationForm } from 'features/authorization/model/hooks/useValidationForm'
import {
    type UserRegistrationError,
    type UserRegistrationModel
} from 'features/authorization/model/types/UserAuthSchema'
import { SelectEmail, SelectSetEmail, useAuth } from 'entities/User'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { confirmEmailLink } from 'shared/constants/confirm-email'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { FormWrapper } from 'shared/ui/FormWrapper/FormWrapper'
import { Input } from 'shared/ui/Input/Input'
import { SocialIcons } from 'shared/ui/SocialIcons/SocialIcons'
import cls from './RegisterForm.module.scss'

interface RegisterValidation {
    login: string
    email: string
    password: string
    confPassword?: string
}

export const RegisterForm: FC = memo(() => {
    const { register, handleSubmit, validErrors: { passwordError, emailError, confPasswordError, loginError } } =
      useValidationForm(['email', 'password', 'login', 'confPassword'])

    const setEmail = useAuth(SelectSetEmail)
    const email = useAuth(SelectEmail)
    const { setIsOpen } = useConfirmModal()

    const { mutate: registration, isLoading, error } =
      useMutation<any, AxiosError<UserRegistrationError>, UserRegistrationModel, unknown>({
          mutationFn: AuthService.registration,
          retry: false,
          onSuccess: () => {
              routerPush(AppRoutes.AUTH.LOGIN)
              setIsOpen(true)
              localStorage.setItem('email', email)
          }
      })

    const responseError = useMemo(() => {
        return error?.response?.data?.errorsMessages.reduce((accum, item) => {
            accum[item.field] = item.message
            return accum
        }, {} as Record<string, string>)
    }, [error])

    const onSubmit = useCallback((data: RegisterValidation): void => {
        const { confPassword, ...registerData } = data
        registration({ ...registerData, frontendLink: confirmEmailLink })
        setEmail(data.email)
    }, [error])

    return (
        <FormWrapper className={cls.register} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={cls.title}>Sign Up</h2>
            <SocialIcons/>
            <Input
                {...register('login')}
                type={'text'}
                placeholder={'Login'}
                error={!!loginError}
                errorText={loginError || responseError?.login}
                className={cls.input}/>
            <Input
                {...register('email')}
                type={'email'}
                placeholder={'Email'}
                error={!!emailError}
                errorText={emailError || responseError?.email}
                className={cls.input}/>
            <Input
                {...register('password')}
                type={'password'}
                placeholder={'Password'}
                error={!!passwordError}
                errorText={passwordError}
                className={cls.input}/>
            <Input
                {...register('confPassword')}
                type={'password'}
                error={!!confPasswordError}
                errorText={confPasswordError}
                placeholder={'Password confirmation'}
                className={clsx(cls.input, cls.confirmation)}/>

            <Button data-testid='sign-up-submit' disabled={isLoading} type={'submit'} className={cls.button}>
                Sign Up
            </Button>
            <p className={cls.text}>Do you have an account?</p>
            <AppLink active className={'active'} href={AppRoutes.AUTH.LOGIN}>Sign In</AppLink>
        </FormWrapper>
    )
})
