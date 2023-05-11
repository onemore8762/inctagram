import { useMutation } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import React, { useState } from 'react'

import { AuthService, useConfirmModal } from 'features/authorization'
import { useValidationForm } from 'features/authorization/model/hooks/useValidationForm'
import { SelectSetEmail, useAuth } from 'entities/User'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { createNewPasswordLink } from 'shared/constants/create-new-password'

import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { FormWrapper } from 'shared/ui/FormWrapper/FormWrapper'
import { Input } from 'shared/ui/Input/Input'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

import cls from './PasswordRecoveryForm.module.scss'

interface PasswordRecoveryValidation {
    email: string
}

export const PasswordRecoveryForm = () => {
    const {
        register,
        handleSubmit,
        validErrors: { emailError }
    } = useValidationForm(['email'])
    const setEmail = useAuth(SelectSetEmail)
    const { setIsOpen } = useConfirmModal()
    const [isInfoTextShown, setIsInfoTextShown] = useState(false)

    const { mutate: passwordRecovery, isLoading, error } = useMutation<any, AxiosError<{ message: string }>, any>({
        mutationFn: AuthService.passwordRecovery,
        retry: false,
        onSuccess: async () => {
            setIsInfoTextShown(true)
            setIsOpen(true)
        }
    })

    if (isLoading) return <PageLoader/>

    const onSubmit = (data: PasswordRecoveryValidation) => {
        const payload = { ...data, frontendLink: createNewPasswordLink }

        passwordRecovery(payload)
        setEmail(data.email)
    }

    return (
        <FormWrapper className={cls.rootWrapper} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={cls.title}>Forgot Password</h2>
            <Input
                {...register('email')}
                type={'email'}
                placeholder={'Email'}
                error={!!emailError}
                errorText={emailError}
                className={cls.input}
            />
            <p className={cls.helperText}>Enter your email address and we will send you <br /> further instructions </p>

            {error?.response?.data.message && <p className={cls.error}>{error.response.data.message}</p>}

            {isInfoTextShown && <p className={cls.infoText}>
                The link has been sent by email. <br /> If you don’t receive an email send link again
            </p>}
            <Button
                disabled={isLoading}
                type={'submit'}
                className={cls.button}
            >
                {isInfoTextShown ? 'Send Link again' : 'Send Link'}
            </Button>
            <AppLink active href={AppRoutes.AUTH.LOGIN}>Back to Sign In</AppLink>
        </FormWrapper>
    )
}
