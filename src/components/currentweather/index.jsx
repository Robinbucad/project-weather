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
import sun from '../../assets/img/sun.png'

function CurrentWeather() {

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };


  const { cityContext } = useOneCity()
  const [unit] = useContext(TemperatureContext)

  let date = new Date

  const { cities} = useMoreCities()


  console.log(cityContext)

  return (
    <Container style={{ height: '90vh', }} >
      <Row>

   
          {cityOne.map(e => (
            <Col lg={12} style={{ height:'90vh'}}>
              <h3>{e.name}</h3>
              <p>{date.toLocaleDateString()} {date.getHours()}:{date.getMinutes()} </p>
              
              <img src={`https://openweathermap.org/img/wn/${e.weather.map(d => d.icon)}@4x.png`}></img>
              <p>{e.main.temp} {unit === 'metric' ? 'ºC' : 'ºFº'}</p>
              <div className="min-max">
                <p>Max {e.main.temp_max}{unit === 'metric' ? 'ºC' : 'ºFº'}</p>
                <p>Min {e.main.temp_min}{unit === 'metric' ? 'ºC' : 'ºF'}</p>
              </div>

        <Row style={{ marginBottom: '2rem' }}>
          {cityContext.map((e,i) => (
            <Col key={i} lg={12}>
              <Card border="primary" style={{ width: '100%', alignItems: 'center', height: '23rem', borderRadius: '12px', border: 'none', color: 'white' }} className='img-temp'>

                <Card.Body className="card-body-current">
                  <div >
                    <Card.Title>{e.name}</Card.Title>
                    <p>{`${e.date}, ${e.hours}:${e.minutes} `}</p>
                  </div>

                  <div>
                    <Card.Text className="temp-info-current">{e.main.temp} {unit === 'metric' ? 'ºC' : 'ºF'}</Card.Text>
                    <Card.Text className="desc-temp" >{`${e.weather.map(e => e.description.charAt(0).toUpperCase())}${e.weather.map(e => e.description.slice(1))}`}</Card.Text>
                    <div className="min-max">
                      <p className="max-info-current">Max {e.main.temp_max}{unit === 'metric' ? 'ºC' : 'ºFº'}</p>
                      <p className="max-info-current">Min {e.main.temp_min}{unit === 'metric' ? 'ºC' : 'ºF'}</p>
                    </div>
                  </div>

                </Card.Body>
              </Card>
              
            </Col>
          ))}

        </Row>

        <section className="slider-container">
          <Slider {...settings} className='slider-config' >
            {cities.map((e) =>
              e.daily.map((d, i) => (
                <div key={i} className="card-current-weather" style={{ width: '100%' }}>
                  <div>
                    <p style={{ textAlign: 'center' }}>{d.date}</p>
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
            <Card style={{ width: '110%', height: '13rem', borderRadius: '12px' }}>

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
                  <p className="value-opts-current">{cityContext.map(e => e.main.feels_like)}{unit === 'metric' ? 'ºC' : 'ºF'} </p>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Col>
              <Card style={{ width: '110%', height: '13rem', borderRadius: '12px', display:'flex', justifyContent:'space-between' }}>

                <Card.Body style={{display:'flex', flexDirection:'column'}}>
                  <div>
                    <p className="value-opts-current">Posicion del sol</p>
                  
                  </div>

                  <div className="sun-div">
                    <img className="sun-status" src={sun}></img>
                    <div role='progressbar'>

                    </div>
                  </div>


                  <section style={{display:'flex', width:'110%', gap:'25px'}}>
                      <div className="div-pos-sun">
                        <p>Hora</p>
                        <p className="pues-sol">Amanecer</p>
                      </div>
                      <div className="div-pos-sun">
                        <p>Hora</p>
                        <p className="pues-sol">Puesta del sol</p>
                      </div>
                     
                  </section>
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

