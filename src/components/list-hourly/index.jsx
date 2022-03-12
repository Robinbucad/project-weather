import { useMoreCities } from "../../custom-hook/moreCities"

import sun from '../../assets/img/sunSmall.png'
import rainSmall from '../../assets/img/icon-weather/rainy-medium.png'
import cloudSmall from '../../assets/img/icon-weather/cloudy-small.png'
import nightStorm from '../../assets/img/icon-weather/night_storm-small.png'
import partCloud from '../../assets/img/icon-weather/partly_cloudy-small.png'
import partDayStorm from '../../assets/img/icon-weather/partly_day_storm-small.png'
import rainStorm from '../../assets/img/icon-weather/rainstorm-small.png'
import snowy from '../../assets/img/icon-weather/snowy-small.png'
import thundstorm from '../../assets/img/icon-weather/thunderstorm-small.png'
import './style.css'


function ListHourly() {

  const { cities, citiesSearch } = useMoreCities()

  const handleIcon = (icon) => {
    switch (icon) {
      case '01d': return sun;
      case '01n': return sun;
      case '02d': return partCloud;
      case '02n': return partCloud;
      case '03d': return cloudSmall;
      case '03n': return cloudSmall;
      case '04n': return partDayStorm;
      case '04d': return nightStorm;
      case '09d': return rainStorm;
      case '09n': return rainStorm;
      case '10d': return rainSmall;
      case '10n': return rainSmall;
      case '11d': return thundstorm;
      case '11n': return thundstorm;
      case '13d': return snowy;
      case '13n': return snowy;
      case '50d': return partCloud;
      case '50n': return partCloud
    }
  }


  return (

    <section className="slider-container">
     
      {

        cities.map(e => e.hourly.map((d, i) => (
          <div key={i} className="card-current-weather">


            <div>
              <p style={{ textAlign: 'center' }}>{`${d.hour}:${d.minutes}0`}</p>
            </div>

            <div className="img-container-listHour">
              <img className="img-list-hour" src={d.weather.map(r => handleIcon(r.icon))}></img>

            </div>


            <div className="div-temp-currrent">
              <p>{parseInt(d.temp)}º</p>
            </div>


          </div>
        ))
        )}


    </section>





  )
}

export default ListHourly

