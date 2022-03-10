import { useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { TemperatureContext } from "../../context/temperature.context"
import { useOneCity } from "../../custom-hook/oneCity"
import { Card } from 'react-bootstrap'
import './style.css'
import { useMoreCities } from "../../custom-hook/moreCities"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'



function CurrentWeather() {

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };


  const { cityOne, updateCity } = useOneCity()
  const [unit] = useContext(TemperatureContext)
  const { cities } = useMoreCities()


  return (
    <Container style={{ height: '90vh', }} >
      <Row>

        {cityOne.map(e => (
          <Col lg={12}>
            <Card style={{ width: '100%', height: '80%', marginBottom: '5%', background: '#FF385C', borderRadius: '12px', alignItems: 'center', justifyContent: 'center' }}>

              <div className="card-container">

                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                  Dia,hora
                </Card.Text>
                <Card.Body >
                  <Card.Img className="img-current" src={`https://openweathermap.org/img/wn/${e.weather.map(d => d.icon)}@4x.png`} />
                  <div className="text-card-current">
                    <p className="temp-info-current">{e.main.temp} {unit === 'metric' ? 'ºC' : 'ºF'}</p>
                    <p className="desc-temp">{`${e.weather.map(e => e.description.charAt(0).toUpperCase())}${e.weather.map(e => e.description.slice(1))}`}</p>
                    <div className="min-max">
                      <p className="max-info-current">Max {e.main.temp_max}{unit === 'metric' ? 'ºC' : 'ºFº'}</p>
                      <p className="max-info-current">Min {e.main.temp_min}{unit === 'metric' ? 'ºC' : 'ºF'}</p>
                    </div>
                  </div>

                </Card.Body>
              </div>

            </Card>
          </Col>
        ))}

        <section className="slider-container">
          <Slider {...settings} className='slider-config' >
            {cities.map(e =>
              e.daily.map(d => (
                <div className="card-current-weather" style={{ width: '100%' }}>
                  <div>
                    <p style={{ textAlign: 'center' }}>Hoy</p>
                  </div>
                  <img variant="top" className="img-small" src={`https://openweathermap.org/img/wn/${d.weather.map(i => i.icon)}@2x.png`} />


                  <div className="div-temp-currrent">
                    <p>{d.temp.day}º</p>
                  </div>


                </div>
              ))
            )}

          </Slider>
        </section>


        <Row>
          <Col>
            <Card style={{ width: '110%', height: '13rem', borderRadius:'12px' }}>

              <Card.Body>
                <div className="div-opts-current">
                  <p className="name-opts-current">Índice UV</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].uvi)}</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">Viento</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].wind_speed)}Km/h</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">Humedad</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].humidity)}%</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">Visibilidad</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].wind_speed)}</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">Sensación</p>
                  <p className="value-opts-current">{cityOne.map(e => e.main.feels_like)}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Col>
              <Card style={{ width: '110%', height: '13rem', borderRadius:'12px' }}>

                <Card.Body>
                  <div>
                    <p className="value-opts-current">Posicion del sol</p>
                    <p>Viento</p>
                  </div>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>

      </Row>
    </Container>
  )
}

export default CurrentWeather


/**
 * 
 * <Col lg={12} style={{ height:'90vh'}}>
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
 */

