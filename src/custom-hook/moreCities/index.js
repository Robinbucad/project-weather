import { useState, useEffect,useContext} from "react"
import { TemperatureContext } from "../../context/temperature.context.js"
import { API_KEY } from "../../config"

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useMoreCities = () => {
    const [unit] = useContext(TemperatureContext)
    const [cities, updateCities] = useState([])
    const [lat, updateLatitude] = useState(latLoc)
    const [long, updateLongitude] = useState(lonLoc)
    const [date, updateDate] = useState()

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${unit}&appid=${API_KEY.key4}`)
        .then(r => r.json())
        .then(d => {
            updateCities([d])
            const forecast = d.daily.map(f => {
                f.date = new Date(f.dt * 1000)
                return f
            })
     
            updateDate(forecast.map(e => e.date.toLocaleString("eng",{weekday:"short"})))
        })

  
    
      
    },[lat, long,unit])
    
    return {lat  , long, updateLatitude, updateLongitude, cities,date}
}