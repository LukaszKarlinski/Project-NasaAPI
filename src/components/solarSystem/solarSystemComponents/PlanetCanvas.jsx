import { Canvas, useFrame } from '@react-three/fiber'
import '../../../styles/solarSystem/planetCanvas.scss'
import { CameraControls } from '@react-three/drei'
import { useRef, useState } from 'react'


const Sphere = ({args, texture, grabbing}) =>{

    const ref = useRef();

    useFrame(() =>{
        if(!grabbing)
            ref.current.rotation.y += 0.001;
    })

    return(
        <mesh ref={ref}>
            <sphereGeometry args={args}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}



const PlanetCanvas = ({texture}) =>{

    const [grabbing, setGrabbing] = useState(false);

    return(
        <div className="canvasWrap" style={{cursor: grabbing ? 'grabbing' : 'grab'}} onMouseDown={()=>setGrabbing(true)} onMouseUp={()=>setGrabbing(false)}>
            <Canvas>
                <ambientLight intensity={2}/>

                <Sphere args={[2.5,50,50]} texture={texture} grabbing={grabbing}/>

                <CameraControls/>
            </Canvas>
        </div>
    )
}

export default PlanetCanvas