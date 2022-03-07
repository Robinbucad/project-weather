
import { useState, useEffect } from 'react'
import { useCurrentWeather } from '../../custom-hooks/hook-currentWeather'

function CurrentWeather() {

    const tiempo = useCurrentWeather()
    
  //  const [icon,updateIcon] = useState('')


    return (
        <div>
            <h1>{tiempo.name}</h1>
       
            
        </div>

    )
}

export default CurrentWeather


//   <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>