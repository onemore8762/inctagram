import { LoginForm } from '@/features/authorization'
import { ConfirmModal } from '@/features/authorization/ui/confirmModal/confirmModal'

export default function Login () {
    return <>
        <LoginForm/>
        <ConfirmModal/>
    </>
}
