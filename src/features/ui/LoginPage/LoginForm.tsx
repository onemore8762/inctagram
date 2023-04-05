import React, { useState } from 'react'
import { Input } from '../../../shared/ui/Input/Input'
import { FormWrapper } from '../../../shared/ui/FormWrapper/FormWrapper'
import { Button } from '../../../shared/ui/Button/Button'
import cls from './LoginForm.module.scss'
import GoogleIcon from '../../../shared/assets/icons/general/google.svg'
import FacebookIcon from '../../../shared/assets/icons/general/facebook.svg'

interface LoginFormProps {
    loginText: string
    buttonRegister: string
    text: string
    forgotText: string
    errorText: string
}

export default function LoginForm (props: LoginFormProps) {
    const {
        loginText,
        buttonRegister,
        text,
        forgotText,
        errorText
    } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        alert(email + '' + password)
    }

    return (
        <FormWrapper className={cls.signInBlock}>
            <div className={cls.signInText}><p>{loginText}</p></div>
            <div className={cls.icons}>
                <GoogleIcon/>
                <FacebookIcon/>
            </div>

            <div className={cls.inputBlock}>
                <Input type={'email'} className={cls.inputEmail}
                       onChange={event => {
                           setEmail(event.currentTarget.value)
                       }}/>
                <Input type={'password'}
                       errorText={errorText}
                       className={cls.inputPassword}
                       onChange={event => {
                           setPassword(event.currentTarget.value)
                       }}/>
            </div>

            <div className={cls.forgotPassword}><a href={'/'}>{forgotText}</a></div>

            <Button theme={'primary'} size={'medium'} block className={cls.button} onClick={onSubmit}>
                {loginText}
            </Button>

            <div className={cls.text}><p>{text}</p></div>

            <div className={cls.signUp}><a href="/signUp">{buttonRegister}</a></div>
        </FormWrapper>
    )
};
