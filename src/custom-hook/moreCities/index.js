import { useState, useEffect, useContext } from "react"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { API_KEY } from "../../config"

import { LatContext, LonContext } from "../../context/geocoding/coords.context.js"



export const useMoreCities = () => {
    const [unit] = useContext(TemperatureContext)
    const [lat] = useContext(LatContext)
    const [long] = useContext(LonContext)
    const [cities, updateCities] = useState([])
    const [lng] = useContext(IdiomContext)


    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${unit}&appid=1f7689b2591acb5efd5d91b7e124bf44&lang=${lng}`)
            .then(r => r.json())
            .then(d => {         
                
                updateCities([d])
                d.hourly.map(h => {
                    h.hour = new Date(h.dt * 1000).getHours()
                    h.minutes = new Date(h.dt * 1000).getMinutes()
                    return d
                })

                d.daily.map(f => {
                    f.date = new Date(f.dt * 1000).toLocaleDateString("eng", { weekday: "short" })
                    f.dateLong = new Date(f.dt * 1000).toLocaleDateString("eng", { weekday: "long" })
                    f.icon = `${f.weather.map(r => r.icon)}`
                    return f
                })
            })




    }, [long, lat, unit, lng])

    return {  cities}
}