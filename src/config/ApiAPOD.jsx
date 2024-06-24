import apiKey from './apiKey'


const fetchAPOD = async (date) =>{

    const apiURL = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

    try{
        const response = await fetch(apiURL);
        if(!response.ok){
            throw new Error('response was not ok');
        }

        const data = await response.json();
        return data;
    }
    catch(error){
        console.error('fetch error', error);
    }
}

export default fetchAPOD;