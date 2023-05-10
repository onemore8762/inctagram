import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type ValidateUnion = 'userName' | 'name' | 'surName' | 'city' | 'aboutMe'

const createValidationSchema = (arr: ValidateUnion[]): any => {
    const validationObject = arr.reduce((accum: any, type) => {
        switch (type) {
        case 'userName':
        case 'name':
        case 'surName':
        case 'city':
        case 'aboutMe': {
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

export type IFormValidate = Record<
'userName' |
'name' |
'surName' |
'city' |
'dateOfBirthday' |
'aboutMe' |
'avatarUrl', string>

export const useValidationForm = (arr: ValidateUnion[], defaultValues?: IFormValidate) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm<IFormValidate>({
        resolver: yupResolver(createValidationSchema(arr)),
        mode: 'onSubmit' || 'onChange',
        reValidateMode: 'onChange',
        defaultValues
    })

    const userNameError = errors?.userName && errors.userName.message
    const nameError = errors?.name && errors.name.message
    const surNameError = errors?.surName && errors.surName.message
    const cityError = errors?.city && errors.city.message
    const aboutMeError = errors?.aboutMe && errors.aboutMe.message

    const validErrors = {
        userNameError,
        nameError,
        surNameError,
        cityError,
        aboutMeError
    }

    return {
        validErrors,
        register,
        handleSubmit,
        reset,
        control
    }
}
