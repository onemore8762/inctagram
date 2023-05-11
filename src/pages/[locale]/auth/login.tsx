import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'
import { ConfirmModal, LoginForm } from 'features/authorization'

export default function Login () {
    return <>
        <LoginForm/>
        <ConfirmModal/>
    </>
}

Login.getLayout = getAuthLayout
