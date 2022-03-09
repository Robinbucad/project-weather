
import { useState, useEffect, useContext } from 'react'
import './style.css'
import { Card, Button } from 'react-bootstrap'
import { useOneCity } from '../../custom-hook/oneCity'
import { useGeoLocation } from '../../geolocation'
import { useMoreCities } from '../../custom-hook/moreCities'
import {API_KEY} from '../../config.js'


function CurrentActualWeather() {
 
    const [location, setLocation] = useState('')
    const {cityOne,updateCity}  = useOneCity()
    const {updateLat,updateLon} = useGeoLocation()
    const {lat,cities,long,updateLatitude,updateLongitude, date} = useMoreCities()

    const searchLoc = e => {
        if(e.key === 'Enter'){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY.key4}`)
            .then(r => r.json())
            .then(d => {   
                updateCity([d])
               updateLatitude(d.coord.lat)
               updateLongitude(d.coord.lon)
          
            })
        }
    }
    
 


    


    return (

        <section style={{background:'gray'}}>
           <input value={location} onChange={e => setLocation(e.target.value)} onKeyPress={searchLoc} type='text' ></input>
        
        <div className='container-cards'>
            <div className='current'>
            {cityOne.map((e,i) => (
                <Card key={i} style={{ width: '18rem' }}>
               
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                        {e.main.temp}
                    </Card.Text>
                    <Card.Text>Max temp: {e.main.temp_max}º</Card.Text>
                    <Card.Text>Min temp: {e.main.temp_min}º</Card.Text>
                    <Card.Text>Humidity: {e.main.humidity}</Card.Text>
                    <Card.Text>wind speed: {e.wind.speed}Km/h</Card.Text>
                    <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${e.weather.map(d => d.icon)}@2x.png`} />
                </Card.Body>
            </Card>
            ))}
            </div>
            {cities.map(e => (
                <div className='list-container'>
                    {e.daily.map((d,i) => (

                        <Card key={i} style={{ width: '13rem' }}>

                            <Card.Body>
                                <Card.Title>{console.log(d)}</Card.Title>
                                
                                <Card.Text>{d.temp.day}º</Card.Text>
                                <Card.Text>{d.wind_speed} km/h</Card.Text>
                                <Card.Text>Min: {d.temp.min}º </Card.Text>
                                <Card.Text>Max: {d.temp.max}º </Card.Text>
                                <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${d.weather.map(e => e.icon)}@2x.png`} />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            ))}
     
            
    
            
          
        
        </div>

        </section>


    )
}


export default CurrentActualWeather

/**
 * SON LAS CICITES PERO DA ERROR
            {cities.map(e => (
                <div className='list-container'>
                    {e.daily.map((d,i) => (

                        <Card key={i} style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>{d.dt}</Card.Title>
                                <Card.Text>
                                    {e.dt}
                                </Card.Text>
                                <Card.Text>{d.temp.day}º</Card.Text>
                                <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${d.weather.map(e => e.icon)}@2x.png`} />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            ))}
        </div>
 */

        /**
         *
         */