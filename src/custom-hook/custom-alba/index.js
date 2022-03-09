
import { useEffect, useState } from "react"
import {API_KEY} from '../../config.js'

const latFromLocal = localStorage.getItem('lon')
const lonFromLocal = localStorage.getItem('lat') 

export function useCurrentWeather() {

    const [lat] = useState(lonFromLocal)
    const [lon] = useState(latFromLocal)
    const [weather,setWeather] = useState([])

    navigator.geolocation.getCurrentPosition((function(position){
        localStorage.setItem('lat',position.coords.latitude)
        localStorage.setItem('lon',position.coords.longitude)
       }))

       useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY.key4}`)
        .then(r=> r.json())
        .then(d => setWeather([d]))
       },[])

    return weather
}