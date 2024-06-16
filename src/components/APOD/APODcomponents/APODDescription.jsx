import '../../../styles/APOD/apodDescription.scss'

import { IconChevronLeft } from '@tabler/icons-react';
import { IconChevronRight } from '@tabler/icons-react';

function APODDescription({title, date, description, handleDate, showRightArrow}){

    const handleChangeDate = (direction) =>{
        handleDate(direction);
    }

    return(
        <div className="descriptionWrap">
            <h2>{title}</h2>
            <p className='description'>{description}</p>
            <div className='date'>
                <IconChevronLeft className='arrow' onClick={() => {handleChangeDate('-')}}/>
                <p>{date}</p>
                {showRightArrow && <IconChevronRight className='arrow' onClick={() => {handleChangeDate('+')}}/>}
            </div>
        </div>
    )
}

export default APODDescription;