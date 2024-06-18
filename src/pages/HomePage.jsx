import '../styles/homePage.scss'
import Menu from '../components/Menu'
import BackgroundVideo from '../components/BackgroundVideo'
import APOD from '../components/APOD/APOD'
import SolarSystem from '../components/solarSystem/SolarSystem'


function HomePage(){

    return(
        <div className="wrapAll">
            <div className='headerWrap'>
                <Menu/>
                <BackgroundVideo/>
            </div>
            <APOD/>
            <SolarSystem/>
        </div>
    )
}

export default HomePage