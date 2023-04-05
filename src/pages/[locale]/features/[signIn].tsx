import React, {useState} from 'react';
import {Input} from "../../../shared/ui/Input/Input";
import {FormWrapper} from "../../../shared/ui/FormWrapper/FormWrapper";
import {Button} from "../../../shared/ui/Button/Button";
import cls from './SignIn.module.scss'
import GoogleIcon from '../../../shared/assets/icons/general/google.svg'
import FacebookIcon from '../../../shared/assets/icons/general/facebook.svg'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    alert(email + password)
  }

  return (
    <FormWrapper className={cls.signInBlock}>
      <div className={cls.signInText}><p>Sign In</p></div>
      <div className={cls.icons}>
        <GoogleIcon/>
        <FacebookIcon/>
      </div>

      <div className={cls.inputBlock}>
        <Input type={'email'} className={cls.inputEmail} onChange={event => setEmail(event.currentTarget.value)}/>
        <Input type={'password'} errorText={'The password or email you entered is incorrect.\n' +
          'Please try again'} className={cls.inputPassword} onChange={event => setPassword(event.currentTarget.value)}/>
      </div>

      <div className={cls.forgotPassword}><a href={'/'}>Forgot Password</a></div>

      <Button theme={'primary'} size={'medium'} block className={cls.button} onClick={onSubmit}>
        Sign In
      </Button>

      <div className={cls.text}><p>Don't have an account?</p></div>

      <div className={cls.signUp}><a href="/signUp">Sign Up</a></div>
    </FormWrapper>
  );
};