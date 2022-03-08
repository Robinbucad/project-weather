import { useEffect, useState } from "react"

const latFromLocal = localStorage.getItem('lon')
const lonFromLocal = localStorage.getItem('lat') 

export function useActualWeather() {

    const [lat] = useState(lonFromLocal)
    const [lon] = useState(latFromLocal)
    const [actualweather,updateWeather] = useState([])


    navigator.geolocation.getCurrentPosition((function(position){
        localStorage.setItem('lat',position.coords.latitude)
        localStorage.setItem('lon',position.coords.longitude)
       }))

       useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`)
        .then(r=> r.json())
        .then(d => updateWeather(d))
       },[])

    return actualweather
}