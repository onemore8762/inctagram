import { type FC } from 'react'
import clsx from 'clsx'
import cls from 'features/authorization/ui/NewPassword/NewPassword.module.scss'
import { FormWrapper } from '@/shared/ui/FormWrapper/FormWrapper'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useValidationForm } from '@/features/authorization/model/hooks/useValidationForm'

interface NewPasswordValidation {
    password: string
    confirmPassword?: string
}

export const NewPassword: FC = () => {
    const { register, handleSubmit, validErrors: { passwordError, confPasswordError } } =
      useValidationForm(['password', 'confPassword'])

    const onSubmit = (data: NewPasswordValidation): void => {
        // Обработчик отправки формы
    }

    return (
        <FormWrapper className={cls.newPassword} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={cls.title}>Create new password</h1>
            <Input
                {...register('password')}
                type="password"
                placeholder={'New password'}
                error={!!passwordError}
                errorText={passwordError}
                className={cls.input}
            />
            <Input
                {...register('confPassword')}
                type="password"
                placeholder={'Password confirmation'}
                error={!!confPasswordError}
                errorText={confPasswordError}
                className={clsx(cls.input, cls.confirmation)}
            />
            <Button type={'submit'} size={'regular'}>Create new
                password</Button>
        </FormWrapper>
    )
}
