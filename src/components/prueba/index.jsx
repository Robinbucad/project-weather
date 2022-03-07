import { useCurrentWeather } from "../../custom-hooks/hook-currentWeather"
import { useState, useEffect } from 'react'

function CurrentWeather(){


    const [lat, updateLatitude] = useState('')
    const [lon, updateLongitude] = useState('')


    navigator.geolocation.getCurrentPosition((function(position){
        updateLatitude(position.coords.latitude)
         updateLongitude(position.coords.longitude)
       }))


       useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&---TU APIKEY---`)
        .then(r=> r.json())
        .then(d => console.log(d))
       })


    return(
        <h1>Hola</h1>
    )
}

export default CurrentWeather