import React, {useState} from 'react';
import {Modal} from "../../../shared/ui/Modal/Modal";
import {Input} from "../../../shared/ui/Input/Input";
import {FormWrapper} from "../../../shared/ui/FormWrapper/FormWrapper";
import {Button} from "../../../shared/ui/Button/Button";
import cls from './SignIn.module.scss'

export default function SignIn() {
  const [open, isOpen] = useState(true)

  return (
      <FormWrapper className={cls.signIn}>
        <div><p>Sign In</p></div>
        <div className={cls.icons}>
          <img src="" alt=""/>
        </div>

        <div className={cls.inputBlock}>
          <Input type={'email'}/>
          <Input type={'password'} errorText={'The password or email you entered is incorrect.\n' +
            'Please try again'}/>
        </div>

        <div className={cls.forgotPassword}><a href={'/'}>Forgot Password</a></div>

        <div className={cls.button}>
          <Button theme={'primary'} size={'medium'} block>
            Sign In
          </Button>
        </div>

        <div className={cls.text}><p>Don't have an account?</p></div>

        <div className={cls.signUp}><a href="">Sign Up</a></div>
      </FormWrapper>
  );
};