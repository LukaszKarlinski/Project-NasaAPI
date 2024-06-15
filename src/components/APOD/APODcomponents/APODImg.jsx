import { useEffect } from 'react';
import '../../../styles/APOD/apodImg.scss'

function APODImg(props){

    const {url, title} = props;

    return(
        <div className='imgWrap'>
            <div className='imgContainer'>
                <img src={url} alt={title} />
            </div>
        </div>
    )
}

export default APODImg;