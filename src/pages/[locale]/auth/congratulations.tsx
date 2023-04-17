import CongratulationsImg from 'shared/assets/images/congratulations.png'
import { useTranslation } from 'next-i18next'
import { makeStaticProps, getStaticPaths } from 'shared/lib/i18n/getStatic'
import { Info } from 'entities/Info'
import { getAuthLayout } from 'shared/ui/Layout/AuthLayout/AuthLayout'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function Congratulations () {
    const { t } = useTranslation()
    return (
        <Info title={t('congratulations-title')} // Поздравляю!
              text={t('congratulations-text')} // Ваше сообщение было подтверждено
              buttonText={t('congratulations-button')} // Войти
              image={CongratulationsImg} />
    )
}
Congratulations.getLayout = getAuthLayout
