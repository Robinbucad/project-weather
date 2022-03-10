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
         
                {/* {cities.map(e => e.daily.map(j => (
                <p>{j.date}</p>
            )))
                
                 } */}

                {/* {cities.map(e => e.daily.map(j => (
                    <div>
                        <p>{j.humidity}</p>
                        <p>{j.weather.map(v => v.description)}</p>
                    </div>
                )))

                } */}

                <Card style={{ width: '15%', height: '14rem', marginBottom: '5%', background: '#FF385C', borderRadius: '12px' }}>
                <img src={`https://openweathermap.org/img/wn/${e.weather.map(d => d.icon)}@4x.png`}></img>
                    {cities.map(e => e.daily.map(j => (

                        <Card.Body>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Title>{j.humidity}</Card.Title>
                            <Card.Text>
                                {j.weather.map(v => v.description)}
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