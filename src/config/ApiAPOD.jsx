const apiKey = 'Tcf5extgmZ7iXxXNcvM5LMrJTgytYyn2k1rHZyg7';
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`


const fetchAPOD = async () =>{
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