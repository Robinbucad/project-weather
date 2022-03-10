
import { useState, useEffect, useContext } from "react"
import { API_KEY } from "../../config.js"
import { TemperatureContext } from "../../context/temperature.context.js"

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')




export const useOneCity = () => {

    const [unit] = useContext(TemperatureContext)
    const [lat,updateLat] = useState(latLoc)
    const [lon,updateLon] = useState(lonLoc)
    const [cityOne,updateCity] = useState([])
    
    console.log(unit)

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY.key4}&lang=es`)
        .then(r => r.json())
        .then(d => updateCity([d]))
    },[unit])

    console.log(cityOne)
    
    return {cityOne, updateCity}

}

