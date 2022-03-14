
import { useState, useEffect, useContext } from "react"
import { API_KEY } from "../../config.js"
import { CoordContext } from "../../context/geocoding/coords.context.js"
import { GoogleContext } from "../../context/googleApiContext/google.context.js"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { useGeoLocation } from "../../geolocation/index.js"



export const useOneCity = () => {

    const [unit] = useContext(TemperatureContext)
    const [lat, updatelat, lon, updateLon ] = useContext(CoordContext)
    const [cityOne,updateCity] = useState([])
    const [lng,updateLng] = useContext(IdiomContext)
    const [placeSearch,updatePlace] = useContext(GoogleContext)
    const coord = useGeoLocation()
    

 
    useEffect(() => {
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat }&lon=${lon}&units=${unit}&appid=${API_KEY.key2}&lang=es}`)

        .then(r => r.json())
        .then(d => {
            updatePlace('restaurant')
            updateCity([d])   
            
        })
        
        
    },[unit,lat,lon,lng])



    
    return {cityOne,lng, updateCity}

}

