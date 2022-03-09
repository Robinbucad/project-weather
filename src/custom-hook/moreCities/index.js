import { useState, useEffect} from "react"
import { API_KEY } from "../../config"

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useMoreCities = () => {

    const [cities, updateCities] = useState([])
    const [lat, updateLatitude] = useState(latLoc)
    const [long, updateLongitude] = useState(lonLoc)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY.key4}`)
        .then(r => r.json())
        .then(d => {
            updateCities([d])
        })
      
    },[])
    
    return {lat  , long, updateLatitude, updateLongitude, cities}
}