import '../styles/homePage.scss'
import BackgroundVideo from '../components/BackgroundVideo'
import APOD from '../components/APOD/APOD'

function HomePage(){

    return(
        <div className="wrapAll">
            <div className='headerWrap'>
                <BackgroundVideo/>
            </div>
            <APOD/>
        </div>
    )
}

export default HomePage