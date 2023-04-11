import React from 'react'
import cls from '@/features/authorization/ui/LoginForm/LoginForm.module.scss'
import { FormWrapper } from '@/shared/ui/FormWrapper/FormWrapper'
import { useRouter } from 'next/router'
import { SelectEmail, useAuth } from '@/features/authorization/store'
import { Button } from '@/shared/ui/Button/Button'

export const ConfirmMessageForm = () => {
    const { push } = useRouter()
    const email = useAuth(SelectEmail)
    const clickHandler = () => {
        void push('/ru/auth/login')
    }
    return (
        <FormWrapper className={cls.login}>
            <h2>Email sent</h2>
            <div>We have sent a link to confirm your email to {email}</div>
            <Button onClick={clickHandler}>OK</Button>
        </FormWrapper>
    )
}
