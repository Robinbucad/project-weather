import { useContext } from "react"
import { Container, Row, Col,Card } from "react-bootstrap"
import { TemperatureContext } from "../../context/temperature.context"
import { useMoreCities } from "../../custom-hook/moreCities"
// import './style.css'


function ForecastWeather() {
    const { cities, updateCities } = useMoreCities({})

    const [unit] = useContext(TemperatureContext)
    console.log(cities)



    return (



        <Container>
            <Row>

                <Card style={{ width: '15%', height: '14rem', marginBottom: '5%', background: '#FF385C', borderRadius: '12px' }}>
    
                    {cities.map(e => e.daily.map(j => (

                        <Card.Body>
                            {/* <Card.Title>{j.date}</Card.Title> */}
                            <Card.Title>DIA SEMANA</Card.Title>
                          <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${j.weather.map(v =>v.icon)}@2x.png`}/>
                            <Card.Text>
                                <Col className="temp">{j.temp.max}{unit === 'metric' ? 'ºC' : 'ºFº'}
                              {j.temp.min}{unit === 'metric' ? 'ºC' : 'ºFº'}</Col>
                            </Card.Text>

                        </Card.Body>
                        )))

                    }
                           </Card>







                           </Row>
         
        </Container>


    )

}



export default ForecastWeather