
import { useState, useEffect } from 'react'
import { useCurrentWeather } from '../../custom-hooks/hook-currentWeather'

function CurrentWeather(){

    const tiempo = useCurrentWeather()
 

    return(
        <h1>Hola</h1>
    )
}

export default CurrentWeather