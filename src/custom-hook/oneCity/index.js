
import { useState, useEffect, useContext } from "react"
import { API_KEY } from "../../config.js"
import { LatContext, LonContext } from "../../context/geocoding/coords.context.js"
import { GoogleContext } from "../../context/googleApiContext/google.context.js"
import { SearchContext } from "../../context/search.context.js"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')




export const useOneCity = () => {

    const [unit] = useContext(TemperatureContext)
    const [lat,updateLat] = useContext(LatContext)
    const [lon,updateLon] = useContext(LonContext)
    const [cityOne,updateCity] = useState([])
    const [city, updateSearchCity] = useContext(SearchContext)
    const [lng,updateLng] = useContext(IdiomContext)
    const [placeSearch,updatePlace] = useContext(GoogleContext)

    
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=6895ca3f7b75487a0deaff7aaa6d94be&lang=${lng}`)
        .then(r => r.json())
        .then(d => {
            updatePlace('restaurant')
            updateCity([d])
            updateSearchCity([d])
        })
        
        
    },[unit,lat,lon,lng])


    
    return {cityOne, updateCity}

}

