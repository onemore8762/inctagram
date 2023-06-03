import clsx from 'clsx'

import { useRouter } from 'next/router'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button, FormWrapper, Input, PageLoader } from 'shared/ui'
import { useCreatePassword } from '../../model'
import cls from './NewPasswordForm.module.scss'

interface NewPasswordValidation {
    password: string
    confirmPassword: string
}

export const NewPasswordForm: FC = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm<NewPasswordValidation>({
        mode: 'onChange'
    })

    const passwordError = errors?.password && errors.password.message
    const passwordConfirmError = errors?.confirmPassword && errors.confirmPassword.message
    const { query } = useRouter()
    const { recoveryCode } = query

    const { createPassword, isError, isLoading } = useCreatePassword()
    if (isLoading) return <PageLoader/>
    if (isError) {
        console.log('Something went wrong. Please try again')
    }
    const onSubmit = (data: NewPasswordValidation): void => {
        createPassword({ recoveryCode: String(recoveryCode), newPassword: data.password })
    }

    return (
        <FormWrapper className={cls.newPassword} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={cls.title}>Create new password</h1>
            <Input
                {...register('password', {
                    required: 'Password is required!',
                    minLength: {
                        value: 6,
                        message: 'Your password must be between 6 and 20 characters'
                    },
                    maxLength: {
                        value: 20,
                        message: 'Your password must be between 6 and 20 characters'
                    }
                }
                )}
                type="password"
                placeholder={'New password'}
                error={!!passwordError}
                errorText={passwordError}
                className={cls.input}
            />
            <Input
                {...register('confirmPassword', {
                    required: 'Password confirmation is required!',
                    validate: (value) =>
                        value === getValues('password') || 'The password must match the new password'
                })}
                type="password"
                placeholder={'Password confirmation'}
                error={!!passwordConfirmError}
                errorText={passwordConfirmError}
                className={clsx(cls.input, cls.confirmation)}
            />
            <Button type={'submit'}>Create new
                password</Button>
        </FormWrapper>
    )
}
