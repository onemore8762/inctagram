import { LoginForm } from '@/features/authorization'
import { ConfirmModal } from '@/features/authorization/ui/confirmModal/ConfirmModal'

export default function Login () {
    return <>
        <LoginForm/>
        <ConfirmModal/>
    </>
}
