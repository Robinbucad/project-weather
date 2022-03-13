import { useState, useEffect, useContext } from "react"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { API_KEY } from "../../config"

import { LatContext, LonContext } from "../../context/geocoding/coords.context.js"
import { GoogleContext } from "../../context/googleApiContext/google.context.js"



export const useMoreCities = () => {
    const [unit,updateUnit] = useContext(TemperatureContext)
    const [lat,updateLat] = useContext(LatContext)
    const [long,updateLong] = useContext(LonContext)
    const [cities, updateCities] = useState([])
    const [lng,updateLng] = useContext(IdiomContext)
    const [placeSearch, updatePlaces] = useContext(GoogleContext)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${unit}&appid=${API_KEY.key2}&lang=es}`)
            .then(r => r.json())
            .then(d =>{
                updateCities([d])
            }  )
            

    }, [unit,lng,lat])
    
    return {  cities}
}