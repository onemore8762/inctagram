import { type FC } from 'react'
import clsx from 'clsx'
import cls from 'features/authorization/ui/RegisterForm/RegisterForm.module.scss'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { SocialIcons } from '@/shared/ui/SocialIcons/SocialIcons'
import { FormWrapper } from '@/shared/ui/FormWrapper/FormWrapper'

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

    const emailError = errors?.email && errors.email.message
    const loginError = errors?.login && errors.login.message
    const passwordError = errors?.password && errors.password.message
    // const passwordConfirmError = errors?.confPassword && errors.confPassword.message

    const onSubmit = (data: RegisterValidation): void => {
        console.log(data)
    }
    return (
        <FormWrapper className={cls.register} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={cls.title}>Sign Up</h2>
            <SocialIcons/>
            <Input
                {...register('login', { required: 'Login is required!' })}
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
                {...register('password', { required: 'Password is required!',
                    minLength:{
                    value: 6,
                        message:'password length should be more 5 letters'
                    },
                    maxLength:{
                    value: 20,
                        message: "password length must be less than 21 characters"
                    } })}
                type={'password'}
                placeholder={'Password'}
                error={!!passwordError}
                errorText={passwordError}
                className={cls.input}/>
            {/*<Input*/}
            {/*    {...register('confPassword', { required: 'Password confirmation is required!' })}*/}
            {/*    type={'password'}*/}
            {/*    error={!!passwordConfirmError}*/}
            {/*    errorText={passwordConfirmError}*/}
            {/*    placeholder={'Password confirmation'}*/}
            {/*    className={clsx(cls.input, cls.confirmation)}/>*/}
            <Button type={'submit'} size={'regular'} className={cls.button}>Sign Up</Button>
            <p className={cls.text}>Do you have an account?</p>
            <AppLink active className={'active'} href={'/auth/loginPage'}>Sign In</AppLink>
        </FormWrapper>
    )
}
