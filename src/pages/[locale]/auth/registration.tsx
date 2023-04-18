import { RegisterForm } from 'features/authorization'
import { getAuthLayout } from 'shared/ui/Layout/AuthLayout/AuthLayout'

export default function Registration () {
    return <RegisterForm/>
}

Registration.getLayout = getAuthLayout
