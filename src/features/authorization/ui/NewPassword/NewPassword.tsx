import { type FC } from 'react'
import clsx from 'clsx'
import cls from 'features/authorization/ui/NewPassword/NewPassword.module.scss'
import { useForm } from 'react-hook-form'
import { FormWrapper } from '@/shared/ui/FormWrapper/FormWrapper'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'

interface NewPasswordValidation {
    password: string
    confirmPassword: string
}

export const NewPassword: FC = () => {
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

    const onSubmit = (data: NewPasswordValidation): void => {
        // Обработчик отправки формы
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
            <Button type={'submit'} size={'regular'}>Create new
                password</Button>
        </FormWrapper>
    )
}
