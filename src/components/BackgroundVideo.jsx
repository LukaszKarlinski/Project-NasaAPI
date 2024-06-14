import '../styles/backgroundVideo.scss';
import backgroundVideo from '../assets/videos/backgroundVideo1.mp4'

function BackgroundVideo(){

    return(
        <div className='backgroundVideoContainer'>
            <video autoPlay loop muted className='backgroundVideo'>
                <source src={backgroundVideo}/>
            </video>

            <div className='contentOverlay'>
                <h1>Biblioteka zdjęć nasa</h1>
            </div>
        </div>
    )
}

export default BackgroundVideo