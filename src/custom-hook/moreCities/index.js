import { useState, useEffect, useContext } from "react"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { API_KEY } from "../../config"

import { LatContext, LonContext } from "../../context/geocoding/coords.context.js"
import { GoogleContext } from "../../context/googleApiContext/google.context.js"



export const useMoreCities = () => {
    const [unit] = useContext(TemperatureContext)
    const [lat] = useContext(LatContext)
    const [long] = useContext(LonContext)
    const [cities, updateCities] = useState([])
    const [lng] = useContext(IdiomContext)
    const [placeSearch, updatePlaces] = useContext(GoogleContext)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${unit}&appid=${API_KEY.key2}&lang=${lng}`)
            .then(r => r.json())
            .then(d =>{
                updatePlaces('restaurant')
                updateCities([d])
            }  )
            

    }, [long, lat, unit])

    return {  cities}
}