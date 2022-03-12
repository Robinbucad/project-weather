import { useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { TemperatureContext } from "../../context/temperature.context"
import { useOneCity } from "../../custom-hook/oneCity"
import { Card } from 'react-bootstrap'
import './style.css'
import ListHourly from "../list-hourly"
import { useMoreCities } from "../../custom-hook/moreCities"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sun from '../../assets/img/sun.png'
import { useTranslation } from 'react-i18next'
import { SearchContext } from "../../context/search.context"


function CurrentWeather() {

  
  const [t, i18n] = useTranslation("card")
  const { cityOne } = useOneCity()
  const [unit] = useContext(TemperatureContext)
  const [city ] = useContext(SearchContext)
  const {cities} = useMoreCities()

  const handleBg = (temp) => {
      switch(temp){
        case '01d': return 'img-temp';
        case '01n': return 'img-night';
        case '02d': return 'img-temp';
        case '02n': return 'img-temp';
        case '03d': return 'img-temp';
        case '03n': return 'img-temp';
        case '04n': return 'img-rainy';
        case '04d': return 'img-rainy';
        case '09d': return 'img-temp';
        case '09n': return 'img-temp';
        case '10d': return 'img-temp';
        case '10n': return 'img-temp';
        case '11d': return 'img-temp';
        case '11n': return 'img-temp';
        case '13d': return 'img-temp';
        case '13n': return 'img-temp';
        case '50d': return 'img-temp';
        case '50n': return 'img-temp'
      }
  }

  console.log(city)

  return (
    <Container style={{ height: '90vh', }} >


      <Row>
   
        <Row style={{ marginBottom: '2rem' }}>
          {city.length===0 ? <h1>Cargando</h1> : city.map((e,i) => (
            <Col key={i} lg={12}>
              <Card border="primary" style={{ width: '100%', height: '23rem', borderRadius: '12px', border: 'none', color: 'white' }} className={e.weather.map(d => handleBg(d.icon) )}>

                <Card.Body className="card-body-current">
                  <div >
                    <Card.Title>{e.name}</Card.Title>
                    <p>{`${e.date}`}, {`${e.hours}`}:{`${e.minutes}`}</p>
                  </div>

                  <div>
                    <Card.Text className="temp-info-current">{e.main.temp} {unit === 'metric' ? 'ºC' : 'ºF'}</Card.Text>
                    <Card.Text className="desc-temp" >{`${e.weather.map(e => e.description.charAt(0).toUpperCase())}${e.weather.map(e => e.description.slice(1))}`}</Card.Text>
                    <div className="min-max">
                      <p className="max-info-current">Max {parseInt(e.main.temp_max)}{unit === 'metric' ? 'ºC' : 'ºFº'}</p>
                      <p className="max-info-current">Min {parseInt(e.main.temp_min)}{unit === 'metric' ? 'ºC' : 'ºF'}</p>
                    </div>
                  </div>

                </Card.Body>
              </Card>
              
            </Col>
          ))}

        </Row>

        <Row>
          <Col>
            <ListHourly></ListHourly>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: '105%', height: '13rem', borderRadius: '12px' }}>

              <Card.Body>
                <div className="div-opts-current">
                  <p className="name-opts-current">{t("card.text1")}</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].uvi)}</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">{t("card.text2")}</p>
                  <p className="value-opts-current">{cities.map(e => e.daily[0].wind_speed)}{unit === 'metric' ? 'km/h' : 'Miles/h'}</p>
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
                  <p className="value-opts-current">{cityOne.map(e => parseInt(e.main.feels_like))}{unit === 'metric' ? 'ºC' : 'ºF'} </p>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Col>
              <Card style={{ width: '100%', height: '13rem', borderRadius: '12px', display:'flex', justifyContent:'space-between' }}>

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

