import cls from './RegisterForm.module.scss'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { SocialIcons } from '@/shared/ui/SocialIcons/SocialIcons'
import { FormWrapper } from '@/shared/ui/FormWrapper/FormWrapper'
import { useMutation } from '@tanstack/react-query'
import router from 'next/router'
import { type FC } from 'react'
import { AuthService, useConfirmModal } from '@/features/authorization'
import { type AxiosError } from 'axios'
import { type UserRegistrationModel } from '@/features/authorization/model/types/UserAuthSchema'
import { SelectSetEmail, useAuth } from '@/entities/User'

interface RegisterValidation {
    login: string
    email: string
    password: string
    confPassword: string
}

export const RegisterForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterValidation>({
        mode: 'onChange'
    })
    const setEmail = useAuth(SelectSetEmail)
    const emailError = errors?.email && errors.email.message
    const loginError = errors?.login && errors.login.message
    const passwordError = errors?.password && errors.password.message
    const { setIsOpen } = useConfirmModal()
    const { mutate: registration, isError, isLoading, error } =
        useMutation<any, AxiosError, UserRegistrationModel, unknown>({
            mutationFn: AuthService.registration,
            retry: false,
            onSuccess: () => {
                // void router.push('/ru/auth/confirm-message')
                void router.push('/ru/auth/login')
                setIsOpen(true)
            }
        })
    if (isError) {
        // return <div>{isError}</div> //снекбар
    }
    console.log(error?.response)
    // const passwordConfirmError = errors?.confPassword && errors.confPassword.message
    const onSubmit = (data: RegisterValidation): void => {
        registration({ ...data, frontendLink: 'http://localhost:3000/ru/auth/confirm-email' })
        setEmail(data.email)
    }
    return (
        <FormWrapper className={cls.register} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={cls.title}>Sign Up</h2>
            <SocialIcons/>
            <Input
                {...register('login', {
                    required: 'Login is required!',
                    minLength: {
                        value: 3,
                        message: 'login must be longer than or equal to 3 characters'
                    }
                })}
                type={'text'}
                placeholder={'Login'}
                error={!!loginError}
                errorText={loginError}
                className={cls.input}/>
            <Input
                {...register('email', { required: 'Email is required!' })}
                type={'email'}
                placeholder={'Email'}
                error={!!emailError}
                errorText={emailError}
                className={cls.input}/>
            <Input
                {...register('password', {
                    required: 'Password is required!',
                    minLength: {
                        value: 6,
                        message: 'password length should be more 5 letters'
                    },
                    maxLength: {
                        value: 20,
                        message: 'password length must be less than 21 characters'
                    }
                })}
                type={'password'}
                placeholder={'Password'}
                error={!!passwordError}
                errorText={passwordError}
                className={cls.input}/>
            {/* <Input */}
            {/*    {...register('confPassword', { required: 'Password confirmation is required!' })} */}
            {/*    type={'password'} */}
            {/*    error={!!passwordConfirmError} */}
            {/*    errorText={passwordConfirmError} */}
            {/*    placeholder={'Password confirmation'} */}
            {/*    className={clsx(cls.input, cls.confirmation)}/> */}

            <Button disabled={isLoading} type={'submit'} size={'regular'} className={cls.button}>Sign Up</Button>
            <p className={cls.text}>Do you have an account?</p>
            <AppLink active className={'active'} href={'/auth/loginPage'}>Sign In</AppLink>
        </FormWrapper>
    )
}
