import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'
import { RegisterForm } from 'features/authorization'

export default function Registration () {
    return <RegisterForm/>
}

Registration.getLayout = getAuthLayout
