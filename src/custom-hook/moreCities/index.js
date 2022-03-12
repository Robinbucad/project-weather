import { useState, useEffect, useContext } from "react"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { API_KEY } from "../../config"

import { LatContext, LonContext } from "../../context/geocoding/coords.context.js"



export const useMoreCities = () => {
    const [unit] = useContext(TemperatureContext)
    const [lat] = useContext(LatContext)
    const [long] = useContext(LonContext)
    const [cities, updateCities] = useState([])
    const [lng] = useContext(IdiomContext)


    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${unit}&appid__APIKEY__&lang=${lng}`)
            .then(r => r.json())
            .then(d => updateCities([d]) )

    }, [long, lat, unit, lng])

    return {  cities}
}