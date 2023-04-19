import CongratulationsImg from 'shared/assets/images/congratulations.png'
import { useTranslation } from 'next-i18next'
import { makeStaticProps, getStaticPaths } from 'shared/lib/i18n/getStatic'
import { Info } from 'entities/Info'
import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { AppRoutes } from 'shared/config/routeConfig/path'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function Congratulations () {
    const { t } = useTranslation()
    return (
        <Info title={t('congratulations-title')} // Поздравляю!
              text={t('congratulations-text')} // Ваше сообщение было подтверждено
              buttonText={t('congratulations-button')} // Войти
              image={CongratulationsImg}
              onClick={() => { routerPush(AppRoutes.AUTH.LOGIN) }}
        />
    )
}
Congratulations.getLayout = getAuthLayout
