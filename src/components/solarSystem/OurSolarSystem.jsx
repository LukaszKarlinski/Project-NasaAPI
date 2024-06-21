import '../../styles/solarSystem/ourSolarSystem.scss'
import { useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Planet from './solarSystemComponents/Planet'
import PlanetCanvas from './solarSystemComponents/PlanetCanvas'

import mercury from '../../assets/textures/mercury2k.jpg'
import venus from '../../assets/textures/venus2k.jpg'
import earth from '../../assets/textures/earth2k.jpg'
import mars from '../../assets/textures/mars2k.jpg'
import jupiter from '../../assets/textures/jupiter2k.jpg'
import saturn from '../../assets/textures/saturn2k.jpg'
import uranus from '../../assets/textures/uranus2k.jpg'
import neptune from '../../assets/textures/neptune2k.jpg'



const OurSolarSystem = () =>{

    const mercuryTexture = useLoader(TextureLoader, mercury);
    const venusTexture = useLoader(TextureLoader, venus);
    const earthTexture = useLoader(TextureLoader, earth);
    const marsTexture = useLoader(TextureLoader, mars);
    const jupiterTexture = useLoader(TextureLoader, jupiter);
    const saturnTexture = useLoader(TextureLoader, saturn);
    const uranusTexture = useLoader(TextureLoader, uranus);
    const neptuneTexture = useLoader(TextureLoader, neptune);

    const planets = [
        {
            name: 'mercury',
            positionX: -10,
            delay: 100,
            texture: mercuryTexture,
            img: mercury,
        },
        {   
            name: 'venus',
            positionX: -7,
            delay: 200,
            texture: venusTexture,
            img: venus,
        },
        {   
            name: 'earth',
            positionX: -4,
            delay: 300,
            texture: earthTexture,
            img: earth,
        },
        {
            name: 'mars',
            positionX: -1,
            delay: 400,
            texture: marsTexture,
            img: mars,
        },
        {
            name: 'jupiter',
            positionX: 2,
            delay: 500,
            texture: jupiterTexture,
            img: jupiter,
        },
        {   
            name: 'saturn',
            positionX: 5,
            delay: 600,
            texture: saturnTexture,
            img: saturn,
        },
        {   
            name: 'uranus',
            positionX: 8,
            delay: 700,
            texture: uranusTexture,
            img: uranus,
        },
        {   
            name: 'neptune',
            positionX: 11,
            delay: 800,
            texture: neptuneTexture,
            img: neptune,
        }
    ]

    const [clickPlanet, setClickPlanet] = useState(false);

    const handlePlanetClick = () =>{
        setClickPlanet(true);
    }

    return (
        <div className="solarSystemWrap">
            <div className="planets">
                {planets.map((planet ,i) => <Planet key={i} name={planet.name} img={planet.img} delay={(i + 1)/10} marginTop={clickPlanet?'100vh': '0vh'} handlePlanetClick={handlePlanetClick}/>)}
            </div>
            <div className="planetContent">
                <PlanetCanvas/>
            </div>
        </div>
    )
}

export default OurSolarSystem;