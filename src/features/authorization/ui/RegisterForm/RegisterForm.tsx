import cls from './RegisterForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { FormWrapper } from 'shared/ui/FormWrapper/FormWrapper'
import { useMutation } from '@tanstack/react-query'
import { type FC, memo, useCallback, useMemo } from 'react'
import { AuthService, useConfirmModal } from 'features/authorization'
import { type AxiosError } from 'axios'
import {
    type UserRegistrationError,
    type UserRegistrationModel
} from 'features/authorization/model/types/UserAuthSchema'
import { SelectSetEmail, useAuth } from 'entities/User'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { useValidationForm } from 'features/authorization/model/hooks/useValidationForm'
import clsx from 'clsx'
import { SocialIcons } from 'shared/ui/SocialIcons/SocialIcons'

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
    const { setIsOpen } = useConfirmModal()

    const { mutate: registration, isLoading, error } =
      useMutation<any, AxiosError<UserRegistrationError>, UserRegistrationModel, unknown>({
          mutationFn: AuthService.registration,
          retry: false,
          onSuccess: () => {
              routerPush(AppRoutes.AUTH.LOGIN)
              setIsOpen(true)
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
        registration({ ...registerData, frontendLink: 'http://localhost:3000/ru/auth/confirm-email' })
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

            <Button disabled={isLoading} type={'submit'} className={cls.button}>Sign Up</Button>
            <p className={cls.text}>Do you have an account?</p>
            <AppLink active className={'active'} href={AppRoutes.AUTH.LOGIN}>Sign In</AppLink>
        </FormWrapper>
    )
})
