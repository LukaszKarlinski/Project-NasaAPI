import '../../styles/solarSystem/ourSolarSystem.scss'
import { useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Planet from './solarSystemComponents/Planet'
import PlanetCanvas from './solarSystemComponents/PlanetCanvas'
import PlanetInfo from './solarSystemComponents/PlanetInfo'

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
            info:{
                overview: `The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.`,
                namesake: `Mercury is appropriately named for the swiftest of the ancient Roman gods.`,
                size: `With a radius of 2,440 kilometers, Mercury is a little more than 1/3 the width of Earth.`,
                temperature: `Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 430°C. Without an atmosphere to retain that heat at night, temperatures can dip as low as -180°C.`,
            }
        },
        {   
            name: 'venus',
            positionX: -7,
            delay: 200,
            texture: venusTexture,
            img: venus,
            info:{
                overview: `Venus is the second planet from the Sun, and our closest planetary neighbor. It's the hottest planet in our solar system, and is sometimes called Earth's twin.`,
                namesake: `Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the ancient Greeks. Most features on Venus are named for women. It’s the only planet named after a female god.`,
                size: `Venus is nearly as big around as Earth. Its diameter at its equator is about 12,104 kilometers`,
                temperature: `Surface of Venus temperatures range from 30 to 70 Celsius. This temperature range could accommodate Earthly life, such as “extremophile” microbes. And atmospheric pressure at that height is similar to what we find on Earth’s surface.`,
            }
        },
        {   
            name: 'earth',
            positionX: -4,
            delay: 300,
            texture: earthTexture,
            img: earth,
            info:{
                overview: `Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.`,
                namesake: `The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”`,
                size: `With an equatorial diameter of 12,760 kilometers, Earth is the biggest of the terrestrial planets and the fifth largest planet in our solar system.`,
                rotation: `Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. This tilt causes our yearly cycle of seasons.`,
            }
        },
        {
            name: 'mars',
            positionX: -1,
            delay: 400,
            texture: marsTexture,
            img: mars,
            info:{
                overview: `Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots.`,
                namesake: `Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute – for example, the Egyptians called it "Her Desher," meaning "the red one." Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.`,
                size: `With a radius of 3,390 kilometers, Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.`,
                temperature: `The temperature on Mars can be as high as 20 degrees Celsius or as low as about -153 degrees Celsius. And because the atmosphere is so thin, heat from the Sun easily escapes this planet.`,
            }
        },
        {
            name: 'jupiter',
            positionX: 2,
            delay: 500,
            texture: jupiterTexture,
            img: jupiter,
            info:{
                overview: `Jupiter is a world of extremes. It's the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.5 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis.`,
                namesake: `Jupiter, being the biggest planet, gets its name from the king of the ancient Roman gods.`,
                size: `With a radius of 69,911 kilometers, Jupiter is 11 times wider than Earth. If Earth were the size of a grape, Jupiter would be about as big as a basketball.`,
                atmosphere: `As a gas giant, Jupiter doesn’t have a true surface. The planet is mostly swirling gases and liquids. While a spacecraft would have nowhere to land on Jupiter, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt, and vaporize spacecraft trying to fly into the planet.`,
            }
        },
        {   
            name: 'saturn',
            positionX: 5,
            delay: 600,
            texture: saturnTexture,
            img: saturn,
            info:{
                overview: `Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons. From the jets of water that spray from Saturn's moon Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.`,
                namesake: `The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter.`,
                size: `With an equatorial diameter of about 120,500 kilometers, Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball.`,
                atmosphere: `Saturn is blanketed with clouds that appear as faint stripes, jet streams, and storms. The planet is many different shades of yellow, brown, and gray. Winds in the upper atmosphere reach 500 meters per second in the equatorial region. In contrast, the strongest hurricane-force winds on Earth top out at about 110 meters per second. And the pressure – the same kind you feel when you dive deep underwater – is so powerful it squeezes gas into a liquid.`,
            }
        },
        {   
            name: 'uranus',
            positionX: 8,
            delay: 700,
            texture: uranusTexture,
            img: uranus,
            info:{
                overview: `Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.`,
                namesake: `William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.`,
                size: `With an equatorial diameter of 51,118 kilometers, Uranus is four times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball.`,
                atmosphere: `Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue color. Uranus' planetary atmosphere, with a minimum temperature of -224.2 degrees Celsius makes it even colder than Neptune in some places.`,
            }
        },
        {   
            name: 'neptune',
            positionX: 11,
            delay: 800,
            texture: neptuneTexture,
            img: neptune,
            info:{
                overview: `Dark, cold and whipped by supersonic winds, giant Neptune is the eighth and most distant major planet orbiting our Sun. More than 30 times as far from the Sun as Earth, Neptune is not visible to the naked eye. In 2011, Neptune completed its first 165-year orbit since its discovery.`,
                namesake: `The ice giant Neptune was the first planet located through mathematical calculations. Using predictions made by Urbain Le Verrier, Johann Galle discovered the planet in 1846. The planet is named after the Roman god of the sea, as suggested by Le Verrier.`,
                size: `With an equatorial diameter of 49,528 kilometers, Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball.`,
                atmosphere: `Neptune is our solar system's windiest world. Despite its great distance and low energy input from the Sun, Neptune's winds can be three times stronger than Jupiter's and nine times stronger than Earth's. These winds whip clouds of frozen methane across the planet at speeds of more than 2,000 kilometers per hour. Even Earth's most powerful winds hit only about 400 kilometers per hour.`,
            }
        }
    ]

    const [clickPlanet, setClickPlanet] = useState(false);
    const [zIndex, setZIndex] = useState(0);
    const [currentPlanet, setCurrentPlanet] = useState(0);
    const [canvasGrabbing, setCanvasGrabbing] = useState(false);

    const changeZIndex = (value) =>{
        setZIndex(value);
    }

    const handlePlanetClick = () =>{
        setClickPlanet(!clickPlanet);
        if(!clickPlanet){
            setTimeout(() => setZIndex(10), 1000);    
        }
    }

    return (
        <div className="solarSystemWrap">
            <div className="planets">
                {planets.map((planet ,i) => <Planet key={i} index={i} name={planet.name} img={planet.img} delay={(i + 1)/10} marginTop={clickPlanet?'100vh': '0vh'} handlePlanetClick={handlePlanetClick} currentPlanet={setCurrentPlanet}/>)}
            </div>
            <div className="planetContent" style={{zIndex}}>
                <PlanetCanvas texture={planets[currentPlanet].texture} canvasGrabbing={setCanvasGrabbing}/>
                <PlanetInfo  handlePlanetClick={() => {handlePlanetClick(), changeZIndex(0)}} name={planets[currentPlanet].name} info={planets[currentPlanet].info}/>
            </div>
        </div>
    )
}

export default OurSolarSystem;