import { type FC } from 'react'
import cls from './LoginForm.module.scss'
import { useForm } from 'react-hook-form'
import { FormWrapper } from '@/shared/ui/FormWrapper/FormWrapper'
import { SocialIcons } from '@/shared/ui/SocialIcons/SocialIcons'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { AppLink } from '@/shared/ui/AppLink/AppLink'

export const LoginForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string, password: string }>({
        mode: 'onChange'
    })

    const emailError = errors?.email && errors.email.message
    const passwordError = errors?.password && errors.password.message

    const onSubmit = (data: any): void => {
        console.log(data)
    }
    return (
        <FormWrapper className={cls.login} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={cls.title}>Sign In</h2>
            <SocialIcons/>
            <Input
                {...register('email', { required: 'Email is required!' })}
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
            <p className={cls.link}><AppLink href={'/auth/registration'}>Forgot Password</AppLink></p>
            <Button type={'submit'} size={'regular'} className={cls.button}>Sign In</Button>
            <p className={cls.text}>Don’t have an account?</p>
            <AppLink active className={'active'} href={'auth/loginPage'}>Sign Up</AppLink>
        </FormWrapper>
    )
}
