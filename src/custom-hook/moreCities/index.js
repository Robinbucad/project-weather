import { useState, useEffect, useContext } from "react"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { API_KEY } from "../../config"
import { CoordContext } from "../../context/geocoding/coords.context.js"


export const useMoreCities = () => {
    const [unit,updateUnit] = useContext(TemperatureContext)
    const [lat, updatelat, lon, updateLon ] = useContext(CoordContext)
    const [cities, updateCities] = useState([])
    const [lng,updateLng] = useContext(IdiomContext)

    

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat }&lon=${lon }&units=${unit}&appid=${API_KEY.key3}&lang=es}}`)
            .then(r => r.json())
            .then(d =>{
                updateCities([d])
        
            }  )
            

    }, [unit,lat,lon,lng])
    
    return {  cities}
}