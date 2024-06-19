import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { useRef, useState } from 'react'

const Sphere = ({position, size, texture, delay, handleHidePlanets}) =>{



    //handle Click on planet
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(!clicked);
        const value = clicked ? 0 : -10;
        handleHidePlanets(value);
    }

    //position change animation
    const {scaleA, positionA} = useSpring({
        scaleA: clicked ? 4: 1,
        positionA: clicked ? [-7,0,0] : position,
        config: {
            friction: 20,
            tension: 200,
            clamp: true,
        },
        delay,
    })

    //rotation animation
    const ref = useRef();

    useFrame(() =>{
        ref.current.rotation.y +=0.003
    })

    return(
        <animated.mesh ref={ref} onClick={handleClick} position={positionA} scale={scaleA}>
            <sphereGeometry args={size}/>
            <meshStandardMaterial map={texture}/>
        </animated.mesh>
        
    )
}

export default Sphere