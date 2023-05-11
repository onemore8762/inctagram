import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

type ValidateUnion = 'login' | 'email' | 'password' | 'confPassword'

const passwordRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/g

const passwordValidMassage =
    'Password should include one uppercase letter, one lowercase letter, one number and one special character'

const createValidationSchema = (arr: ValidateUnion[]): any => {
    const validationObject = arr.reduce((accum: any, type) => {
        switch (type) {
        case 'login': {
            accum[type] = yup.string().min(6, `${type} must be at least 6 characters`).required('Field is required!')
            return accum
        }
        case 'email': {
            accum[type] = yup.string().email('Email is not valid!').required('Field is required!')
            return accum
        }
        case 'password': {
            accum[type] = yup
                .string()
                .matches(passwordRegExp, {
                    message: passwordValidMassage
                })
                .min(8, `${type} must be at least 8 characters`)
                .required('Field is required!')
            return accum
        }
        default: {
            return accum
        }
        }
    }, {})

    return yup.object().shape({
        ...validationObject,
        confPassword: yup.string().oneOf([yup.ref('password')], 'Passwords does not match')
    })
}

interface IFormValidate {
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
