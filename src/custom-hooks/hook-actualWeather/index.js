import { useContext, useEffect, useState } from "react"
import { API_KEY } from "../../config"
import { FilterContext } from "../../context/filterContext/filter.context"
import { LonContext } from "../../context/filterContext/lon.context"
import { useSearchWeather } from "../hook-search"

const latFromLocal = localStorage.getItem('lon')
const lonFromLocal = localStorage.getItem('lat') 


export function useActualWeather() {
    

    const [days, updateDays] = useState([])
    const place = useContext(FilterContext)
    const lon = useContext(LonContext)



       useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${place}&lon=${lon}&units=metric&appid=${API_KEY.key2}`)
        .then(r=> r.json())
        .then(d => {
            updateDays(d.daily)
            console.log(d)
        })

       },[])
       


       return days
}