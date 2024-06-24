import '../styles/backgroundVideo.scss';
import backgroundVideo from '../assets/videos/backgroundVideo1.mp4'

const BackgroundVideo = () =>{

    return(
        <div className='backgroundVideoContainer'>
            <video autoPlay loop muted className='backgroundVideo'>
                <source src={backgroundVideo}/>
            </video>

            <div className='contentOverlay'>
                <h1>Welcome to the Universe</h1>
            </div>
        </div>
    )
}

export default BackgroundVideo