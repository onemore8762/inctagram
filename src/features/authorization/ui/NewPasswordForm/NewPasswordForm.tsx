import { type FC } from 'react'
import clsx from 'clsx'
import cls from 'features/authorization/ui/NewPasswordForm/NewPasswordForm.module.scss'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useRouter } from 'next/router'
import { AuthService } from 'features/authorization/model/service/authService'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { Button } from 'shared/ui/Button/Button'
import { FormWrapper } from 'shared/ui/FormWrapper/FormWrapper'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { Input } from 'shared/ui/Input/Input'

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
    const { code } = query
    const queryClient = useQueryClient()
    const { mutate: createPassword, isError, isLoading } = useMutation({
        mutationFn: AuthService.createPassword,
        onSuccess: async () => {
            await queryClient.invalidateQueries(['me']).then((res) => { routerPush(AppRoutes.AUTH.LOGIN) })
        }
    })
    if (isLoading) return <PageLoader/>
    if (isError) {
        console.log('Something went wrong. Please try again')
    }
    const onSubmit = (data: NewPasswordValidation): void => {
        createPassword({ recoveryCode: String(code), newPassword: data.password })
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
