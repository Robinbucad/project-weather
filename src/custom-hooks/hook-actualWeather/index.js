import { useEffect, useState } from "react"
<<<<<<< HEAD
=======
import { API_KEY } from "../../config"
>>>>>>> develop

const latFromLocal = localStorage.getItem('lon')
const lonFromLocal = localStorage.getItem('lat') 

<<<<<<< HEAD
=======

>>>>>>> develop
export function useActualWeather() {

    const [lat] = useState(lonFromLocal)
    const [lon] = useState(latFromLocal)
    const [actualweather,updateWeather] = useState([])

<<<<<<< HEAD

    navigator.geolocation.getCurrentPosition((function(position){
        localStorage.setItem('lat',position.coords.latitude)
        localStorage.setItem('lon',position.coords.longitude)
       }))

       useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`)
=======
       useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY.key}`)
>>>>>>> develop
        .then(r=> r.json())
        .then(d => updateWeather(d))
       },[])

    return actualweather
}