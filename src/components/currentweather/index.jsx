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
import rainSmall from '../../assets/img/icon-weather/rainy-small.png'
import cloudSmall from '../../assets/img/icon-weather/cloudy-small.png'
import nightStorm from '../../assets/img/icon-weather/night_storm-small.png'
import partCloud from '../../assets/img/icon-weather/partly_cloudy-small.png'
import partDayStorm from '../../assets/img/icon-weather/partly_day_storm-small.png'
import rainStorm from '../../assets/img/icon-weather/rainstorm-small.png'
import snowy from '../../assets/img/icon-weather/snowy-small.png'
import thundstorm from '../../assets/img/icon-weather/thunderstorm-small.png'
import { useTranslation } from 'react-i18next'

function CurrentWeather() {

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  const [t, i18n] = useTranslation("card")


  const { cityContext } = useOneCity()
  const [unit] = useContext(TemperatureContext)


  const { cities} = useMoreCities()


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
    <Container style={{ height: '90vh', }} >


      <Row>
   
        <Row style={{ marginBottom: '2rem' }}>
          {cityContext.length===0 ? <h1>Cargando</h1> : cityContext.map((e,i) => (
            <Col key={i} lg={12}>
              <Card border="primary" style={{ width: '100%', alignItems: 'center', height: '23rem', borderRadius: '12px', border: 'none', color: 'white' }} className='img-temp'>

                <Card.Body className="card-body-current">
                  <div >
                    <Card.Title>{e.name}</Card.Title>
                    <p>{`${e.date}`}, {`${e.hours}`}:{`${e.minutes}`}</p>
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
            {cities.length === 0 ? <h1>Cargando...</h1>:

              cities[0].daily.map((d, i) => (
                <div key={i} className="card-current-weather" style={{ width: '100%' }}>
                  <div>
                    <p style={{ textAlign: 'center' }}>{d.date}</p>
                  </div>
                  <img variant="top" className="img-small" src={handleIcon(d.icon)}  />


                  <div className="div-temp-currrent">
                    <p>{d.temp.day}º</p>
                  </div>


                </div>
              )
            )}

          </Slider>
        </section>


        <Row>
          <Col>
            <Card style={{ width: '110%', height: '13rem', borderRadius: '12px' }}>

              <Card.Body>
                <div className="div-opts-current">
                  <p className="name-opts-current">{t("card.text1")}</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].uvi)}</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">{t("card.text2")}</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].wind_speed)}Km/h</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">{t("card.text3")}</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].humidity)}%</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">{t("card.text4")}</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].wind_speed)}</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">{t("card.text5")}</p>
                  <p className="value-opts-current">{cityContext.map(e => e.main.feels_like)}{unit === 'metric' ? 'ºC' : 'ºF'} </p>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Col>
              <Card style={{ width: '110%', height: '13rem', borderRadius: '12px', display:'flex', justifyContent:'space-between' }}>

                <section style={{display:'flex', flexDirection:'column'}}>
                  <div>
                    <p className="value-opts-current">{t("card.card2")}</p>
                  
                  </div>

                  <div className="sun-div">
                    <img className="sun-status" src={sun} ></img>
                    <div role='progressbar'>

                    </div>
                  </div>


                  <section style={{display:'flex', width:'110%', gap:'25px'}}>
                      <div className="div-pos-sun">
                        <p>{t("card.card4")}</p>
                        <p className="pues-sol">{t("card.card3")}</p>
                      </div>
                      <div className="div-pos-sun">
                        <p>{t("card.card4")}</p>
                        <p className="pues-sol">{t("card.card5")}</p>
                      </div>
                     
                  </section>
                </section>
              </Card>
            </Col>
          </Col>
        </Row>

      </Row>
   
    </Container>
  )
}

export default CurrentWeather

