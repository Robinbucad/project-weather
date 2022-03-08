
/*
import { useState, useEffect } from "react"



const latFromLocal = localStorage.getItem('lon')
const lonFromLocal = localStorage.getItem('lat') 

export function useForeCastWeather(){

    
    const [lat] = useState(lonFromLocal)
    const [lon] = useState(latFromLocal)
    const [foreCast,setForeCast] = useState([])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=09470b2c21c566193aff07298b5d4d3c`)
        .then(r=> r.json())
        .then(d => setForeCast(d))
       },[])

       return foreCast
}*/