import '../styles/homePage.scss'
import Menu from '../components/Menu'
import BackgroundVideo from '../components/BackgroundVideo'
import APOD from '../components/APOD/APOD'
import OurSolarSystem from '../components/solarSystem/OurSolarSystem'


const HomePage = () =>{

    return(
        <div className="wrapAll">
            <div className='headerWrap'>
                <Menu/>
                <BackgroundVideo/>
            </div>
            <APOD/>
            <OurSolarSystem/>
        </div>
    )
}

export default HomePage