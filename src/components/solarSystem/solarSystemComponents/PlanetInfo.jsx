import '../../../styles/solarSystem/planetInfo.scss'

const PlanetInfo = ({handlePlanetClick,name, info}) =>{
    return(
        <div className='planetInfoWrap'>
            <h1>{name}</h1>
            <p className='overview'>{info.overview}</p>
            <div className='informationWrap'>
                <h2>namesake</h2>
                <p>{info.namesake}</p>
            </div>
            <div className='informationWrap'>
                <h2>size</h2>
                <p>{info.size}</p>
            </div>
            {info.temperature && <div className='informationWrap'>
                <h2>temperature</h2>
                <p>{info.temperature}</p>
            </div>}
            {info.rotation && <div className='informationWrap'>
                <h2>rotation</h2>
                <p>{info.rotation}</p>
            </div>}
            {info.atmosphere && <div className='informationWrap'>
                <h2>atmosphere</h2>
                <p>{info.atmosphere}</p>
            </div>}

            <div className='back' onClick={() => {handlePlanetClick()}}>
                {`<`}
            </div>
        </div>
    )
}

export default PlanetInfo