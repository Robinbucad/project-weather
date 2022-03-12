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
  const [unit] = useContext(TemperatureContext)
  const [city ] = useContext(SearchContext)
  const {cities} = useMoreCities()

  const { cityOne } = useOneCity()
  console.log(cityOne)

  const handleBg = (temp) => {
      switch(temp){
        case '01d': return 'img-temp';
        case '01n': return 'img-night';
        case '02d': return 'img-cloudy';
        case '02n': return 'img-cloudy';
        case '03d': return 'img-cloudy';
        case '03n': return 'img-cloudy';
        case '04n': return 'img-cloudy';
        case '04d': return 'img-cloudy';
        case '09d': return 'img-rainy';
        case '09n': return 'img-rainy';
        case '10d': return 'img-rainy';
        case '10n': return 'img-rainy';
        case '11d': return 'img-rainy';
        case '11n': return 'img-rainy';
        case '13d': return 'img-rainy';
        case '13n': return 'img-rainy';
        case '50d': return 'img-cloudy';
        case '50n': return 'img-cloudy'
      }
  }

  const date = new Date().getHours()

  const handlePos = date => {
    if(date > 7 &&  date <15 ){
      return 'sun-sunrise'
    }else if (date <= 7 && date >= 0){
      return 'sun-fullMorning'
    }else if (date >=16 && date <= 19){
      return 'sunset'
    }else if(date >= 19 && date <= 24){
      return 'night'
    }
  }





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
                    <p>{`${new Date(e.dt*1000).toLocaleDateString("eng",{weekday:"short"})}`}, {`${new Date(e.dt*1000).getHours()}`}:{`${new Date(e.dt*1000).getMinutes()}`}</p>
                  </div>

                  <div>
                    <Card.Text className="temp-info-current">{parseInt(e.main.temp)} {unit === 'metric' ? 'ºC' : 'ºF'}</Card.Text>
                    <Card.Text className="desc-temp" >{`${e.weather.map(e => e.description.charAt(0).toUpperCase())}${e.weather.map(e => e.description.slice(1))}`}</Card.Text>
                    <div className="min-max">
                      <p className="max-info-current">Max {parseInt(e.main.temp_max)}{unit === 'metric' ? 'ºC' : 'ºFº'}</p>
                      <p className="max-info-current">Min {parseInt(e.main.temp_min)}{unit === 'metric' ? 'ºC' : 'ºF'}</p>
                    </div>
                  </div>

                </Card.Body>
              </Card>
              
            </Col>
        ))
}
        </Row>

        <Row>
          <Col>
            <ListHourly></ListHourly>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: '99%', height: '13rem', borderRadius: '12px' }}>

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
                  <p className="value-opts-current">{cityOne.map(e => e.visibility/1000)}Km</p>
                </div>
                <div className="div-opts-current">
                  <p className="name-opts-current">{t("card.text5")}</p>
                  <p className="value-opts-current">{cities.map(e =>parseInt(e.current.feels_like))}{unit === 'metric' ? 'ºC' : 'ºF'} </p>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Col>
              <Card style={{ width: '99%', height: '13rem', borderRadius: '12px', display:'flex', padding:'10px', justifyContent:'space-between' }}>

                <section className="div-pos-sun">
                  <div>
                    <p className="value-opts-current">{t("card.card2")}</p>
                  
                  </div>

                  <div className="sun-div">
                    <img className={handlePos(12)} src={sun} ></img>
                    <div role='progressbar'>

                    </div>
                  </div>


                  <section style={{display:'flex', gap:'5px'}}>
                      <div className="div-pos-sun">
                        <p>{`${cities.map(e => new Date(e.current.sunrise*1000).getHours())}:${cities.map(e => new Date(e.current.sunrise*1000).getMinutes())}`}</p>
                        <p className="pues-sol">{t("card.card3")}</p>
                      </div>
                      <div className="div-pos-sun">
                        <p>{`${cities.map(e => new Date(e.current.sunset*1000).getHours())}:${cities.map(e => new Date(e.current.sunset*1000).getMinutes())}`}</p>
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

