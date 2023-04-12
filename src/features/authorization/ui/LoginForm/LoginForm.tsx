import { type FC } from 'react'
import cls from './LoginForm.module.scss'
import { useForm } from 'react-hook-form'
import { FormWrapper } from '@/shared/ui/FormWrapper/FormWrapper'
import { SocialIcons } from '@/shared/ui/SocialIcons/SocialIcons'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthService } from '@/features/authorization'
import { type UserLoginModel } from '@/features/authorization/model/types/UserAuthSchema'
import { useRouter } from 'next/router'
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader'
import { Avatar } from '@/shared/ui/Avatar/Avatar'

export const LoginForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<{ loginOrEmail: string, password: string }>({
        mode: 'onChange'
    })

    const emailError = errors?.loginOrEmail && errors.loginOrEmail.message
    const passwordError = errors?.password && errors.password.message
    const queryClient = useQueryClient()
    const { push } = useRouter()
    const { mutate: login, isError, isLoading } = useMutation({
        mutationFn: AuthService.login,
        onSuccess: async () => {
            await queryClient.invalidateQueries(['me']).then((res) => push('/ru/profile/createProfile'))
        }
    })
    if (isLoading) return <PageLoader/>
    if (isError) {
        console.log('The password or the email or Username are incorrect. Try again, please')
    }
    const onSubmit = (data: UserLoginModel): void => {
        login(data)
    }
    return (
        <FormWrapper className={cls.login} onSubmit={handleSubmit(onSubmit)}>
            <Avatar size={50}/>
            <h2 className={cls.title}>Sign In</h2>
            <SocialIcons/>
            <Input
                {...register('loginOrEmail', { required: 'Email is required!' })}
                type={'email'}
                placeholder={'Email'}
                error={!!emailError}
                errorText={emailError}
                className={cls.input}/>
            <Input
                {...register('password', { required: 'Password is required!' })}
                type={'password'}
                placeholder={'Password'}
                error={!!passwordError}
                errorText={passwordError}
                className={cls.input}/>
            <p className={cls.link}><AppLink href={'/auth/forgot'}>Forgot Password</AppLink></p>
            <Button type={'submit'} size={'regular'} className={cls.button}>Sign In</Button>
            <p className={cls.text}>Don’t have an account?</p>
            <AppLink active className={'active'} href={'/auth/registration'}>Sign Up</AppLink>
        </FormWrapper>
    )
}
