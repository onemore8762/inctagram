import { RegisterForm } from 'features/authorization'
import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'

export default function Registration () {
    return <RegisterForm/>
}

Registration.getLayout = getAuthLayout
