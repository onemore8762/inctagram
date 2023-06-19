import React from 'react'

import { useValidationForm } from 'features/auth/lib/useValidationForm'
import { AppRoutes } from 'shared/config/routeConfig/path'

import { AppLink, Button, FormWrapper, Input, PageLoader } from 'shared/ui'

import { useRecoverPassword } from '../../model'
import cls from './PasswordRecoveryForm.module.scss'

export interface PasswordRecoveryValidation {
    email: string
}

export const PasswordRecoveryForm = () => {
    const {
        register,
        handleSubmit,
        validErrors: { emailError }
    } = useValidationForm(['email'])
    const { isInfoTextShown, onSubmit, isLoading, error } = useRecoverPassword()

    if (isLoading) return <PageLoader/>

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
