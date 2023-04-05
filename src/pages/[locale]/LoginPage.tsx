import LoginForm from "../../features/ui/LoginPage/LoginForm";

export default function LoginPage() {
  return (<LoginForm loginText={'Sign In'}
                     buttonRegister={'Sign Up'}
                     text={'Don`t have an account?'}
                     forgotText={'Forgot Password'}
                     errorText={'The password or email you entered is incorrect.\n' +
                       'Please try again'}/>)
}