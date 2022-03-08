
import { useState, useEffect } from 'react'
import { useActualWeather } from '../../custom-hooks/hook-actualWeather'
import { useSearchWeather } from '../../custom-hooks/hook-search'
import './style.css'
import { Card, Button } from 'react-bootstrap'

function CurrentActualWeather() {


    const [unix, setUnix] = useState([])


    const actual = useActualWeather([])


    const search = useSearchWeather('madrid')
    console.log(search)






    return (
        <div className='container'>
            {actual.map((e, i) => (
                <Card style={{ width: '18rem' }}>
                    
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

