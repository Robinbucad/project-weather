
import { useState, useEffect } from 'react'
import { useActualWeather } from '../../custom-hooks/hook-actualWeather'

function CurrentActualWeather(){

    const actual = useActualWeather()
    console.log(actual)


 
       


    return(
        <h1>tiempo actual</h1>
    )
}

export default CurrentActualWeather