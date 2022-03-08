
import { useState, useEffect } from 'react'
import { useCurrentWeather } from '../../custom-hooks/hook-currentWeather'
import { useForeCastWeather } from '../../custom-hooks/hook-forecast'

function CurrentWeather() {

    const tiempo = useCurrentWeather()


    
 
    return (
        <div>
            <h1>{tiempo.name}</h1>

           
        </div>

    )
}

export default CurrentWeather


//   