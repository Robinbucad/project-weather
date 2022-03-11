import { useState, useEffect,useContext} from "react"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { API_KEY } from "../../config"


const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useMoreCities = () => {
    const [unit] = useContext(TemperatureContext)
    const [cities, updateCities] = useState([])
    const [lat, updateLatitude] = useState(latLoc)
    const [long, updateLongitude] = useState(lonLoc)
    const [lng,updateLng] = useContext(IdiomContext)



    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${unit}&appid=${API_KEY.key4}&lang=${lng}`)
        .then(r => r.json())
        .then(d => {
            updateCities([d])
                d.daily.map(f => {
                f.date = new Date(f.dt * 1000).toLocaleDateString("eng",{weekday:"short"})
                f.icon = `${f.weather.map(r => r.icon)}`
                return f
            }
            
            )
     
            
        })


    
      
    },[lat])
    
    return {lat  , long, updateLatitude, updateLongitude, cities}
}