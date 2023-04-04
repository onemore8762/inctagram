import VerificationImg from 'shared/assets/images/verification.png'
import InfoPage from '../../shared/components/infoPage/InfoPage'

export default function Verification () {
    return (
        <InfoPage title={'Email verification link expired!'}
                  text={'Looks like the verification link has expired. Not to worry, we can send the link again'}
                  buttonText={'Resend verification link'}
                  image={VerificationImg} />
    )
}
