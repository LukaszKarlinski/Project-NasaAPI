import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import '../../styles/solarSystem.scss'

import sun from '../../../src/assets/textures/sun.jpg';


function SolarSystem(){

    const sunTexture = useLoader(TextureLoader, sun);

    return(
        <div className="canvasWrap">
            <Canvas camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
                <ambientLight/>

                <mesh position={[-20,0,0]}>
                    <sphereGeometry args={[10,40,40]}/>
                    <meshBasicMaterial map={sunTexture}/>
                </mesh>
            </Canvas>
        </div>
    )
}

export default SolarSystem;