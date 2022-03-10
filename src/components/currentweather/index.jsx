import { useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { TemperatureContext } from "../../context/temperature.context"
import { useOneCity } from "../../custom-hook/oneCity"
import './style.css'





function CurrentWeather(){

  const { cityOne, updateCity } = useOneCity()
  const [unit] = useContext(TemperatureContext)

  console.log(unit)

  return(
    <Container>
      <Row>
   
          {cityOne.map(e => (
            <Col lg={12} style={{ height:'90vh'}}>
              <h3>{e.name}</h3>
              <p>Dia y hora</p>
              <img src={`https://openweathermap.org/img/wn/${e.weather.map(d => d.icon)}@4x.png`}></img>
              <p>{e.main.temp} {unit === 'metric' ? 'ºC' : 'ºFº'}</p>
              <div className="min-max">
                <p>Max {e.main.temp_max}{unit === 'metric' ? 'ºC' : 'ºFº'}</p>
                <p>Min {e.main.temp_min}{unit === 'metric' ? 'ºC' : 'ºF'}</p>
              </div>
              <div>
                <p>Mas info future</p>
              </div>
            </Col>
          ) )}
     
      </Row>
    </Container>
  )
}

export default CurrentWeather
    

