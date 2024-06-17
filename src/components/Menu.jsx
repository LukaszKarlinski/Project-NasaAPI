import '../styles/menu.scss';

function Menu(){

    const handleScroll = (scrollTo)=>{
        const vh = window.innerHeight;
        window.scrollTo({top: scrollTo * vh, behavior: 'smooth'});
    }

    return(
        <nav>
            <ul>
                <li onClick={()=>{handleScroll(1)}}>Picture of the day</li>
            </ul>
        </nav>
    )
}

export default Menu;