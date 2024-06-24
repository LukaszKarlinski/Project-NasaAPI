import { useEffect } from 'react';
import '../../../styles/APOD/apodImg.scss'

const APODImg = ({url, title, mediaType}) => {

    return(
        <div className='imgWrap'>
            <div className='imgContainer'>
                {mediaType==='image'? 
                    <img src={url} alt={title} /> : 
                    <iframe src={url} frameborder="0"></iframe>
                } 
            </div>
        </div>
    )
}

export default APODImg;