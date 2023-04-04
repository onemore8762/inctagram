import VerificationImg from 'shared/assets/images/verification.png'
import { useTranslation } from 'next-i18next'
import { makeStaticProps, getStaticPaths } from 'shared/lib/getStatic'
import Info from 'entities/Info/Info'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function Verification () {
    const { t } = useTranslation()
    return (
        <Info title={t('verification-title')} // Срок действия ссылки для подтверждения электронной почты истек!
              text={t('verification-text')} // Срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз
              buttonText={t('verification-button')} // Повторно отправить ссылку для подтверждения
              image={VerificationImg} />
    )
}
