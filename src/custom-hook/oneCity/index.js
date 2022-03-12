
import { useState, useEffect, useContext } from "react"
import { API_KEY } from "../../config.js"
import { SearchContext } from "../../context/search.context.js"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')




export const useOneCity = () => {

    const [unit] = useContext(TemperatureContext)
    const [lat,updateLat] = useState(latLoc)
    const [lon,updateLon] = useState(lonLoc)
    const [cityOne,updateCity] = useState([])
    const [city, updateSearchCity] = useContext(SearchContext)
    const [lng,updateLng] = useContext(IdiomContext)
   

    
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=__APIKEY__&lang=${lng}`)
        .then(r => r.json())
        .then(d => updateSearchCity([d]))

    },[unit,lng,lat,lon])


    
    return {cityOne, updateCity}

}

