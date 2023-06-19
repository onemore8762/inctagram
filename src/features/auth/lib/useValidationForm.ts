import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { createValidationSchema, type ValidateUnion } from './loginFormSchema'

export interface IFormValidate {
    login: string
    password: string
    email: string
    confPassword?: string
}

export const useValidationForm = (arr: ValidateUnion[]) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IFormValidate>({
        resolver: yupResolver(createValidationSchema(arr)),
        mode: 'onSubmit' || 'onChange',
        reValidateMode: 'onChange'
    })

    const emailError = errors?.email && errors.email.message
    const passwordError = errors?.password && errors.password.message
    const confPasswordError = errors?.confPassword && errors.confPassword.message
    const loginError = errors?.login && errors.login.message

    const validErrors = {
        emailError,
        passwordError,
        confPasswordError,
        loginError
    }

    return {
        validErrors,
        register,
        handleSubmit,
        reset
    }
}
