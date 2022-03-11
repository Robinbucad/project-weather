
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
    const [cityContext, setCitycontext] = useContext(SearchContext)
    const [lng,updateLng] = useContext(IdiomContext)
    
    console.log(lng)

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY.key4}&lang=${lng}`)
        .then(r => r.json())
        .then(d => {
            setCitycontext([d])
            d.date = new Date(d.dt * 1000).toLocaleDateString("eng",{weekday:"long"})
            d.minutes = new Date(d.dt * 1000).getMinutes()
            d.hours = new Date(d.dt * 1000).getHours()
         
            return d
        })
    },[unit,lng])


    
    return {cityOne, updateCity, cityContext}

}

