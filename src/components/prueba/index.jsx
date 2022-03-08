
import { useState, useEffect } from 'react'
import { useCurrentWeather } from '../../custom-hooks/hook-currentWeather'

import { useSearchWeather } from '../../custom-hooks/hook-search'

function CurrentWeather() {

    const tiempo = useCurrentWeather()
    console.log(tiempo)
    
 
    return (
        <div>
            {tiempo.map(e => (
                <div>
                <h1>{e.name}</h1>
                <p>{e.main.temp}</p>
                <img src= {`https://openweathermap.org/img/wn/${tiempo.map(e => e.weather.map(e => e.icon))}@2x.png`}></img>
                </div>
            ))}
           
         
           
        </div>

    )
}

export default CurrentWeather


//   