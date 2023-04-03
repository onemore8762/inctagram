import CongratulationsImg from 'shared/assets/images/congratulations.png'
import InfoPage from '../../shared/components/infoPage/InfoPage'

export default function Congratulations () {
    return (
        <InfoPage title={'Congratulations!'}
                  text={'Your email has been confirmed'}
                  buttonText={'Sign in'}
                  image={CongratulationsImg} />
    )
}
