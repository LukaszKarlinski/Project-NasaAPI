import '../../styles/apod.scss';
import '../../config/ApiAPOD';
import { useEffect, useState } from 'react';
import fetchAPOD from '../../config/ApiAPOD';
import APODImg from './APODcomponents/APODImg';
import APODDescription from './APODcomponents/APODDescription';

import { IconLoader2 } from '@tabler/icons-react';

const APOD = () =>{

    //setting correct date to fetch data

    const [apodDate, setApodDate] = useState({
        date: new Date(),
        dateFormat: '',
    });

    const handleDate = (direction='') =>{

        setApodData({
            imgUrl: '',
            title: '',
            description: '',
            mediaType: '',
        })

        const currentDate = new Date();

        const date = new Date(apodDate.date);

        if(direction==='-'){
            date.setDate(new Date(date.getDate()-1));
        }
        else if(direction==='+'){
            date.setDate(new Date(date.getDate()+1));
        }
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const dateToFetch = `${year}-${month}-${day}`;
        setApodDate({
            date,
            dateFormat: dateToFetch,
        });

        //showArrowRight handle
        if(`${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}` === `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`){
            setShowRightArrow(false);
        }
        else{
            setShowRightArrow(true);
        }
    }

    useEffect(()=>{
        handleDate();
    },[]);

    useEffect(() =>{
        getData(apodDate.dateFormat);
    },[apodDate]);

    const [showRightArrow, setShowRightArrow] = useState(false);   


    //get data from nasa api

    const [apodData, setApodData] = useState({
        imgUrl: '',
        title: '',
        description: '',
        mediaType: '',
    })

    //get data from nasa api
    const getData = async (apodDate) =>{
        const data = await fetchAPOD(apodDate);
        setApodData({
            url: data.url,
            title: data.title,
            description: data.explanation,
            mediaType: data.media_type,
        });
    }

   
    //handling loading screen
    const [loadingData, setLoadingData] = useState(false);

    useEffect(()=>{
        if(apodData.description===''){
            setLoadingData(true);
        }
        else{
            setLoadingData(false);
        }
    },[apodData]);


    return(
        <section className="apodWrap">
            <div className='titleWrap'>
                <h2>Astronomy Picture of the Day</h2>
            </div>
            <div className='contentWrap'>
                {loadingData && <div className='loadingScreen'><div className='loadingContainer'><IconLoader2 size={50}/></div></div>}
                <APODImg {...apodData}/>
                <APODDescription {...apodData} date={apodDate.dateFormat} handleDate={handleDate} showRightArrow={showRightArrow}/>
            </div>
        </section>
    )
}

export default APOD;