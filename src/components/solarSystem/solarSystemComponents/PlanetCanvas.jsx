import { Canvas } from '@react-three/fiber'
import '../../../styles/solarSystem/planetCanvas.scss'
import { CameraControls } from '@react-three/drei'

const PlanetCanvas = ({texture}) =>{
    return(
        <div className="canvasWrap">
            <Canvas>
                <ambientLight intensity={2}/>
                <mesh>
                    <sphereGeometry args={[2.5, 50,50]}/>
                    <meshStandardMaterial map={texture} />
                </mesh>
                <CameraControls/>
            </Canvas>
        </div>
    )
}

export default PlanetCanvas