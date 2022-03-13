import { useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { TemperatureContext } from "../../context/temperature.context"
import { useMoreCities } from "../../custom-hook/moreCities"
import sun from '../../assets/img/sunSmall.png'
import rainSmall from '../../assets/img/icon-weather/rainy-medium.png'
import cloudSmall from '../../assets/img/icon-weather/cloudy-small.png'
import nightStorm from '../../assets/img/icon-weather/night_storm-small.png'
import partCloud from '../../assets/img/icon-weather/partly_cloudy-small.png'
import partDayStorm from '../../assets/img/icon-weather/partly_day_storm-small.png'
import rainStorm from '../../assets/img/icon-weather/rainstorm-small.png'
import snowy from '../../assets/img/icon-weather/snowy-small.png'
import thundstorm from '../../assets/img/icon-weather/thunderstorm-small.png'
import './style.css'
import { useState } from "react"



function ForecastWeather() {

    const { cities } = useMoreCities()

    const handleIcon = (icon) => {
        switch (icon) {
            case '01d': return sun;
            case '01n': return sun;
            case '02d': return partCloud;
            case '02n': return partCloud;
            case '03d': return cloudSmall;
            case '03n': return cloudSmall;
            case '04n': return partDayStorm;
            case '04d': return nightStorm;
            case '09d': return rainStorm;
            case '09n': return rainStorm;
            case '10d': return rainSmall;
            case '10n': return rainSmall;
            case '11d': return thundstorm;
            case '11n': return thundstorm;
            case '13d': return snowy;
            case '13n': return snowy;
            case '50d': return partCloud;
            case '50n': return partCloud
        }
    }


 

    return (

        <Container>

            <Row >

                <Col style={{ display: 'flex', gap: '1rem', marginBottom:'35px' }}>
                    { cities.map(e => e.daily.map((r, i) => (
                       
                        <Card value={i}  key={i} style={{ width: '110px', width: '200px', borderRadius:'12px'}} className='cardForecast'>
                            
                             <Card.Body>
                                 <div className="div-date-forecast">
                                <p>{`${new Date(r.dt*1000).toLocaleDateString("eng",{weekday:"long"})}`}</p>
                               </div>
                                                             
                                <Card.Img variant="top" src={r.weather.map(n => handleIcon(n.icon))} />

                                <div className="div-min-max-forecast">
                                    <p>{`${parseInt(r.temp.max)}º`}</p>
                                    <p>{`${parseInt(r.temp.min)}º`}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    )))

                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ForecastWeather