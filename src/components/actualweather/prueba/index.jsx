import { useState, useEffect } from 'react'

import { Card, Button } from 'react-bootstrap'
import { useCurrentWeather } from '../../../custom-hook/custom-alba'
import nube from '../../../assets/img/thnderstorm.png'

function CurrentWeatherP() {

    const tiempo = useCurrentWeather()
    // const current = useForeCastWeather()


    console.log(tiempo)



    return (
        <div>
            <img src={nube}></img>
            <h1>{tiempo.map(e => e.name)}</h1>
            <h2>{tiempo.map(e => e.main.temp)}</h2>
      
        </div >
    )
    
}

export default CurrentWeatherP