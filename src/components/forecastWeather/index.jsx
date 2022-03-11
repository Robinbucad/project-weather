import { useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { TemperatureContext } from "../../context/temperature.context"
import { useMoreCities } from "../../custom-hook/moreCities"
// import './style.css'


function ForecastWeather() {
    const { cities, updateCities } = useMoreCities([])

    const [unit] = useContext(TemperatureContext)
    console.log(cities)






    return (



        <Container>
            <Row >

                <div style={{display:'flex', gap:'1rem'}}>
               

                        {cities.map(e => e.daily.map(j => (
        <Card style={{ width: '10%', height: '14rem', marginBottom: '5%', borderRadius: '12px' }}>
                            <Card.Body>

                                <Card.Title>{j.date?.toString()}</Card.Title>
                                <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${j.weather.map(v => v.icon)}@2x.png`} />
                                <Card.Text>
                                    <Col className="temp">{j.temp.max}{unit === 'metric' ? 'ºC' : 'ºFº'}
                                        {j.temp.min}{unit === 'metric' ? 'ºC' : 'ºFº'}</Col>
                                </Card.Text>

                            </Card.Body>
                            </Card>
                        )))
                       
                        }
                

                </div>








            </Row>

        </Container>


    )

}



export default ForecastWeather