import '../../styles/apod.scss';
import '../../config/ApiAPOD';
import { useEffect, useState } from 'react';
import fetchAPOD from '../../config/ApiAPOD';
import APODImg from './APODcomponents/APODImg';
import APODDescription from './APODcomponents/APODDescription';

function APOD(){

    const [apodData, setApodData] = useState({
        imgUrl: '',
        title: '',
        date: '',
        description: ''
    })

    useEffect(()=>{
        const getData = async () =>{
            const data = await fetchAPOD();
            setApodData({
                imgUrl: data.hdurl,
                title: data.title,
                data: data.date,
                description: data.explanation,
            });
            console.log(apodData);
        }

        getData();
    },[])


    return(
        <section className="apodWrap">
            <div className='titleWrap'>
                <h2>Astronomy Picture of the Day</h2>
            </div>
            <div className='contentWrap'>
                <APODImg url={apodData.imgUrl} title={apodData.title}/>
                <APODDescription {...apodData}/>
            </div>
        </section>
    )
}

export default APOD;