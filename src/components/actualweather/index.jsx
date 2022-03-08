
import { useState, useEffect, useContext } from 'react'
import { useActualWeather } from '../../custom-hooks/hook-actualWeather'
import { useSearchWeather } from '../../custom-hooks/hook-search'
import './style.css'
import { Card, Button } from 'react-bootstrap'
import { FilterContext } from '../../context/filterContext/filter.context'
import { API_KEY } from '../../config'
import { LonContext } from '../../context/filterContext/lon.context'




function CurrentActualWeather() {

    const [lati, updateLati] = useState([])
    const [long, updateLon] = useState([])

    navigator.geolocation.getCurrentPosition((function(position){
        updateLati(position.coords.latitude)
        updateLon(position.coords.longitude)
       }))



    

    const [text, updateText] = useState('')

    const [search, setSEarch] = useState([])


       

    const handleChange = e => {
        updateText(e.target.value)

    }

    
    

    const handleClick = e => {
        
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${text}&appid=${API_KEY.key}`)
            .then(r => r.json())
            .then(d => setSEarch(d))

    }

   
    const [days, updateDays] = useState([])




       useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&units=metric&appid=${API_KEY.key2}`)
        .then(r=> r.json())
        .then(d => {
            updateDays(l => [...l,d])
           
        })

       },[])

       console.log(days)
 
       
      
   
       


    return (
        <div className='container'>

            <h1>Soy el filtro</h1>
            <input onChange={handleChange} type='text' />
            <button onClick={handleClick}>Search</button>
           


        </div>
    )
}


export default CurrentActualWeather

/**
 * 
 *  {actual.map((e, i) => (
                <div className='card' key={i}>
                    <p>{e.dt}</p>
                    <img src={`https://openweathermap.org/img/wn/${e.weather.map(e => e.icon)}@2x.png`} />
                    <p>º{e.temp.day}</p>
                </div>


            ))}
 */

            /**
             * 
             *   {actual.map((e, i) => (
                    <Card key={i} style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                {e.dt}
                            </Card.Text>
                            <Card.Text>{e.temp.day}</Card.Text>
                            <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${e.weather.map(e => e.icon)}@2x.png`} />
                        </Card.Body>
                    </Card>
                ))}
             */

    


                /***
                 * 
                 */