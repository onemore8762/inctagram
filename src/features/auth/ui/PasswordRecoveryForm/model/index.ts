import { useMutation } from '@tanstack/react-query'
import { type AxiosError } from 'axios'
import { useState } from 'react'
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useAuth } from 'features/auth/model'
import { SelectSetEmail } from 'features/auth/model/selectors'
import { AuthService } from 'shared/api/auth/authService'
import { createNewPasswordLink } from 'shared/constants/create-new-password'
import { useModal } from 'shared/hooks/useModal'
import { type PasswordRecoveryValidation } from '../ui/PasswordRecoveryForm/PasswordRecoveryForm'

export const useRecoverPassword = () => {
    // const { executeRecaptcha } = useGoogleReCaptcha()

    const [isInfoTextShown, setIsInfoTextShown] = useState(false)
    const setEmail = useAuth(SelectSetEmail)
    const { setIsOpen } = useModal()

    const { mutate: passwordRecovery, isLoading, error } = useMutation<any, AxiosError<{ message: string }>, any>({
        mutationFn: AuthService.passwordRecovery,
        retry: false,
        onSuccess: async () => {
            setIsInfoTextShown(true)
            setIsOpen(true)
        }
    })
    // console.log({ executeRecaptcha })

    const onSubmit = (data: PasswordRecoveryValidation) => {
        // if (!executeRecaptcha) {
        //     console.log('Execute recaptcha not yet available')
        //     return
        // }
        // // eslint-disable-next-line @typescript-eslint/no-floating-promises
        // executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
        //     console.log(gReCaptchaToken, 'response Google reCaptcha server')
        //     // submitEnquiryForm(gReCaptchaToken)
        // })
        passwordRecovery(data)
        setEmail(data.email)
    }

    return { isInfoTextShown, onSubmit, isLoading, error }
}
