import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type ValidateUnion = 'userName' | 'firstName' | 'lastName'

const createValidationSchema = (arr: ValidateUnion[]): any => {
    const validationObject = arr.reduce((accum: any, type) => {
        switch (type) {
        case 'userName':
        case 'firstName':
        case 'lastName': {
            accum[type] = yup
                .string()
                .required('Field is required!')
            return accum
        }
        default: {
            return accum
        }
        }
    }, {})

    return yup.object().shape(validationObject)
}

export type IFormValidate = Record<'userName' | 'firstName' | 'lastName' | 'city' | 'dateOfBirth' | 'aboutMe', string>

export const useValidationForm = (arr: ValidateUnion[]) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm<IFormValidate>({
        resolver: yupResolver(createValidationSchema(arr)),
        mode: 'onSubmit' || 'onChange',
        reValidateMode: 'onChange'
    })

    const userNameError = errors?.userName && errors.userName.message
    const firstNameError = errors?.firstName && errors.firstName.message
    const lastNameError = errors?.lastName && errors.lastName.message

    const validErrors = {
        userNameError,
        firstNameError,
        lastNameError
    }

    return {
        validErrors,
        register,
        handleSubmit,
        reset,
        control
    }
}
