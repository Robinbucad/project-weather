import { useEffect, useState } from "react"
import { API_KEY } from "../../config"

const latFromLocal = localStorage.getItem('lon')
const lonFromLocal = localStorage.getItem('lat') 


export function useActualWeather() {
    

    const [lat] = useState(lonFromLocal)
    const [lon] = useState(latFromLocal)

    const [days, updateDays] = useState([])


       useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY.key}`)
        .then(r=> r.json())
        .then(d => {
            updateDays(d.daily)
        })

       },[])

    




       return days
}