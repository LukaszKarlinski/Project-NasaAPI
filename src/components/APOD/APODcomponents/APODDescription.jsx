import '../../../styles/APOD/apodDescription.scss'

function APODDescription({title, data, description}){

    return(
        <div className="descriptionWrap">
            <h2>{title}</h2>
            <p className='description'>{description}</p>
            <p className='date'>{data}</p>
        </div>
    )
}

export default APODDescription;