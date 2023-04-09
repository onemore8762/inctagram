import NotFoundImg from 'shared/assets/images/404error.png'
import InfoPage from '../../shared/components/infoPage/InfoPage'

export default function NotFound () {
    return (
        <InfoPage title={'404! Page not found'}
                  text={'Looks like the page you are looking for is not available'}
                  buttonText={'Back'}
                  image={NotFoundImg}
                  onClick={() => { history.back() }}
        />
    )
}
