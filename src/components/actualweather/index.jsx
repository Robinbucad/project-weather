
import { useState, useEffect } from 'react'
import { useActualWeather } from '../../custom-hooks/hook-actualWeather'
import { useSearchWeather } from '../../custom-hooks/hook-search'
import './style.css'

function CurrentActualWeather() {


    const [unix,setUnix] = useState([])
  

    const actual = useActualWeather([])
   

    const search = useSearchWeather('madrid')
    console.log(search)

    


    

    return ( 
        <div className='container'>
           {actual.map((e,i) => (
               <div className='card' key={i}>
                   <p>{e.dt}</p>
                   <img src={`https://openweathermap.org/img/wn/${e.weather.map(e => e.icon)}@2x.png`} />
                   <p>º{e.temp.day}</p>
                </div>
               
          
           ))}
        </div>
     )
}


export default CurrentActualWeather

