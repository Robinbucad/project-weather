import { useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { TemperatureContext } from "../../context/temperature.context"
import { useMoreCities } from "../../custom-hook/moreCities"
import rainSmall from '../../assets/img/icon-weather/rainy-small.png'
import cloudSmall from '../../assets/img/icon-weather/cloudy-small.png'
import nightStorm from '../../assets/img/icon-weather/night_storm-small.png'
import partCloud from '../../assets/img/icon-weather/partly_cloudy-small.png'
import partDayStorm from '../../assets/img/icon-weather/partly_day_storm-small.png'
import rainStorm from '../../assets/img/icon-weather/rainstorm-small.png'
import snowy from '../../assets/img/icon-weather/snowy-small.png'
import thundstorm from '../../assets/img/icon-weather/thunderstorm-small.png'


function ForecastWeather() {
    const { cities, updateCities } = useMoreCities([])

    const [unit] = useContext(TemperatureContext)

    const handleIcon = (icon)  => {
        switch(icon){
         case '10d': return rainSmall ;
         case '04d': return cloudSmall;
         case '02d': return partCloud;
         case '03d': return cloudSmall;
         case '09d': return rainStorm;
         case '11d': return thundstorm;
         case '13d': return snowy;
     
        }
     
       }

    return (



        <Container>
            <Row >

                <Col style={{ display: 'flex', gap: '1rem' }}>


                    {cities.map((e) => e.daily.map((j, i )=> (

                        <Card key={i} style={{ width: '10%', height: '14rem', marginBottom: '5%', borderRadius: '12px' }}>
                            <section>

                                <Card.Title>{j.date?.toString()}</Card.Title>
                                <img variant="top" src={handleIcon(j.icon)} />
                                <section>
                                    <div className="temp">{j.temp.max}{unit === 'metric' ? 'ºC' : 'ºFº'}
                                        {j.temp.min}{unit === 'metric' ? 'ºC' : 'ºFº'}</div>
                                </section>

                            </section>
                        </Card>
                    )))

                    }


                </Col>








            </Row>

        </Container>


    )

}



export default ForecastWeather