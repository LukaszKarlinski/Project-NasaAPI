import '../../../styles/solarSystem/planet.scss'

const Planet = ({name, img, index, currentPlanet, delay, marginTop, handlePlanetClick}) =>{

    const style = {
        backgroundImage:`url(${img})`,
        transition: `.5s ease-in ${delay}s`,
        marginTop,
    }

    const handleClick = () =>{
        handlePlanetClick();
        currentPlanet(index);
    }


    return(
        <div className="planetWrap" style={style} onClick={handleClick}>
            <div className='planet' >
                <h1>{name}</h1>
                <div className='bottomArrow'>
                    <p>^</p>
                    <p>Learn More</p>
                </div>
            </div>
            
        </div>
    )
}

export default Planet