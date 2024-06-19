import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useState } from 'react';
import Sphere from './threeJsComponents/Shpere';
import '../../styles/solarSystem.scss'

import sun from '../../assets/textures/sun8k.jpg';
import mercury from '../../assets/textures/mercury2k.jpg';
import venus from '../../assets/textures/venus2k.jpg';
import earth from '../../assets/textures/earth2k.jpg';
import mars from '../../assets/textures/mars2k.jpg';
import jupiter from '../../assets/textures/jupiter2k.jpg';
import saturn from '../../assets/textures/saturn2k.jpg';
import uranus from '../../assets/textures/uranus2k.jpg';
import neptune from '../../assets/textures/neptune2k.jpg';



function SolarSystem(){

    const [y, setY] = useState(0);

    const sunTexture = useLoader(TextureLoader, sun);
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
            positionX: -10,
            delay: 100,
            texture: mercuryTexture,
        },
        {
            positionX: -7,
            delay: 200,
            texture: venusTexture
        },
        {
            positionX: -4,
            delay: 300,
            texture: earthTexture 
        },
        {
            positionX: -1,
            delay: 400,
            texture: marsTexture
        },
        {
            positionX: 2,
            delay: 500,
            texture: jupiterTexture
        },
        {
            positionX: 5,
            delay: 600,
            texture: saturnTexture
        },
        {
            positionX: 8,
            delay: 700,
            texture: uranusTexture
        },
        {
            positionX: 11,
            delay: 800,
            texture: neptuneTexture
        }
    ]

    const handleHidePlanets = (value) =>{
        setY(value);
    }

    return(
        <div className="canvasWrap">
            <Canvas camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
                <ambientLight intensity={2}/>

                <mesh position={[-20,0,0]}>
                    <sphereGeometry args={[7,50,50]}/>
                    <meshBasicMaterial map={sunTexture}/>
                </mesh>

                {planets.map(planet =>{
                    return <Sphere position={[planet.positionX, y, 0]} size={[1.2,50,50]} texture={planet.texture} delay={planet.delay} handleHidePlanets={handleHidePlanets}/>
                })}
            </Canvas>
        </div>
    )
}

export default SolarSystem;