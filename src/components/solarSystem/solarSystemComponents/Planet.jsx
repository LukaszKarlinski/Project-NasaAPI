import { useEffect } from 'react';
import '../../../styles/solarSystem/planet.scss'
import { IconChevronUp } from '@tabler/icons-react';

const Planet = ({name, img, index, currentPlanet, delay, marginType, marginValue, handlePlanetClick}) =>{


    //set the correct animation depending on the screen orientation
    const correctMargin = marginType==='marginTop' ? `${marginValue}vh` : `${marginValue}vw`;

    const style = {
        backgroundImage:`url(${img})`,
        transition: `.5s ease-in ${delay}s`,
        [marginType]: correctMargin,
    }

    //passing information on which planet user clicked
    const handleClick = () =>{
        handlePlanetClick();
        currentPlanet(index);
    }


    return(
        <div className="planetWrap" style={style} onClick={handleClick}>
            <div className='planet' >
                <h1>{name}</h1>
                <div className='bottomArrow'>
                    <div className='arrowWrap'>
                        <IconChevronUp stroke={2}/>
                    </div>
                    <p>Learn More</p>
                </div>
            </div>
            
        </div>
    )
}

export default Planet