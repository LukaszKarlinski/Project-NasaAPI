import '../styles/homePage.scss'
import BackgroundVideo from '../components/BackgroundVideo'
import APOD from '../components/APOD/APOD'
import Menu from '../components/Menu'

function HomePage(){

    return(
        <div className="wrapAll">
            <div className='headerWrap'>
                <Menu/>
                <BackgroundVideo/>
            </div>
            <APOD/>
        </div>
    )
}

export default HomePage