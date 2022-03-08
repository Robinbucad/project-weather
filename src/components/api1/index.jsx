
import { useState, useEffect } from 'react'

function CurrentActualWeather(){


    const [lat, updateLatitude] = useState('')
    const [lon, updateLongitude] = useState('')
    const key = '6895ca3f7b75487a0deaff7aaa6d94be'


    navigator.geolocation.getCurrentPosition((function(position){
        updateLatitude(position.coords.latitude)
         updateLongitude(position.coords.longitude)
       }))


       useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
        .then(r=> r.json())
        .then(d => console.log(d))
       })


    return(
        <h1>Hola</h1>
    )
}

export default CurrentActualWeather