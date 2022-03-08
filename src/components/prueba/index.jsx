
import { useState, useEffect } from 'react'
import { useCurrentWeather } from '../../custom-hooks/hook-currentWeather'
import { useForeCastWeather } from '../../custom-hooks/hook-forecast'
import { useSearchWeather } from '../../custom-hooks/hook-search'

function CurrentWeather() {

    const tiempo = useCurrentWeather()
   // const current = useForeCastWeather()

    const search = useSearchWeather('mexico')
    console.log(search)
 
    return (
        <div>
            <h1>{tiempo.name}</h1>

           
        </div>

    )
}

export default CurrentWeather


//   