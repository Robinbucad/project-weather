import { useContext, useEffect, useState } from "react"
import { API_KEY } from "../../config"
import { FilterContext } from "../../context/filterContext/filter.context"
import { LonContext } from "../../context/filterContext/lon.context"

const latFromLocal = localStorage.getItem('lon')   
const lonFromLocal = localStorage.getItem('lat')  

export function useCurrentWeather() {

    const place = useContext(FilterContext)
    const lon = useContext(LonContext)
    const [weather,setWeather] = useState([])
    



       useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${place}&lon=${lon}&appid=${API_KEY.key}`)
        .then(r=> r.json())
        .then(d => {
            setWeather([d])
        })
       },[])

    return weather
}





