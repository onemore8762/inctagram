import { ConfirmModal, LoginForm } from 'features/authorization'
import { getAuthLayout } from 'shared/ui/Layout/AuthLayout/AuthLayout'

export default function Login () {
    return <>
        <LoginForm/>
        <ConfirmModal/>
    </>
}

Login.getLayout = getAuthLayout
