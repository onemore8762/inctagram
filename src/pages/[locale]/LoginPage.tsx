import LoginForm from '../../features/ui/LoginPage/LoginForm'
import { useTranslation } from 'next-i18next'
import { makeStaticProps, getStaticPaths } from '../../shared/lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function LoginPage () {
    const { t } = useTranslation()
    return (<LoginForm loginText={t('congratulations-button')} // Sign In
                       buttonRegister={'Sign Up'}
                       text={'Don`t have an account?'}
                       forgotText={'Forgot Password'}
                       errorText={'The password or email you entered is incorrect.\n' +
    'Please try again'}/>)
}
