import { Container, Row, Col } from "react-bootstrap"
import { useOneCity } from "../../custom-hook/oneCity"
import './style.css'





function CurrentWeather(){

  const { cityOne, updateCity } = useOneCity()

  console.log(cityOne)

  return(
    <Container>
      <Row>
   
          {cityOne.map(e => (
            <Col lg={12} style={{backgroundColor:'red', height:'90vh'}}>
              <h3>{e.name}</h3>
              <p>Dia y hora</p>
              <img src={`https://openweathermap.org/img/wn/${e.weather.map(d => d.icon)}@4x.png`}></img>
              <p>{e.main.temp}</p>
              <div className="min-max">
                <p>Max {e.main.temp_max}</p>
                <p>Min {e.main.temp_min}</p>
              </div>
            </Col>
          ) )}
     
      </Row>
    </Container>
  )
}

export default CurrentWeather
    

