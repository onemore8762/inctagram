
import VerificationImg from 'shared/assets/images/verification.png'
import { useTranslation } from 'next-i18next'
import { makeStaticProps, getStaticPaths } from 'shared/lib/i18n/getStatic'
import { Info } from 'entities/Info'
import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'
import { SelectSetEmail, useAuth } from 'entities/User'
import { AuthService, ConfirmModal, useConfirmModal } from 'features/authorization'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { useMutation } from '@tanstack/react-query'
import { confirmEmailLink } from 'shared/constants/confirm-email'
import { useSnackbar } from 'widgets/SnackBar/model/store/snackbarStore'
import { useEffect, useState } from 'react'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function verification () {
    const { t } = useTranslation()
    const setEmail = useAuth(SelectSetEmail)
    const [emailInLocalStorage, setEmailInLocalStorage] = useState('')
    const { setIsOpen } = useConfirmModal()
    const onOpen = useSnackbar((state) => state.onOpen)
    const { mutate: resendEmail } = useMutation(AuthService.resendEmail, {
        mutationKey: ['resendEmail'],
        onSuccess: () => {
            routerPush(AppRoutes.AUTH.LOGIN)
            setIsOpen(true)
        },
        onError: () => {
            onOpen('Email already confirmed or doesnt exist', 'danger', 'left')
            // routerPush(AppRoutes.AUTH.FORGOT_PASSWORD)
        }
    })
    useEffect(() => {
        setEmailInLocalStorage(localStorage.getItem('email') || '')
    }, [])

    const clickHandler = () => {
        if (emailInLocalStorage) {
            setEmail(emailInLocalStorage)
            resendEmail({ frontendLink: confirmEmailLink, email: emailInLocalStorage })
        }
    }
    return (
        <>
            <ConfirmModal/>
            <Info title={t('verification-title')} // Срок действия ссылки для подтверждения электронной почты истек!
                  text={t('verification-text')} // Срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз
                  buttonText={t('verification-button')} // Повторно отправить ссылку для подтверждения
                  image={VerificationImg}
                  onClick={clickHandler}
            />
        </>
    )
}
verification.getLayout = getAuthLayout
