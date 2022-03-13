import { useContext, useState } from 'react'
import { Container, Row, Col,Form} from 'react-bootstrap'
import logo from '../../assets/img/logo-airbnb-tiempo.svg'
import { IdiomContext, TemperatureContext } from '../../context/temperature.context'
import './style.css'
import { API_KEY } from '../../config.js'
import { SearchContext } from '../../context/search.context'
import mundo from '../../assets/img/idioma.png'
import { useTranslation } from 'react-i18next'
import { LatContext, LonContext } from '../../context/geocoding/coords.context'
import iconPlaceholder from '../../assets/img/placeholderIcon.svg'


function Header() {
    
    const [unit, updateUnit] = useContext(TemperatureContext)
    const [location, updateLocation] = useState('')
    const [, updateCityContext] = useContext(SearchContext)
    
    /**UPDATE COORDS CONTEXT */
    const [,updateLat] = useContext(LatContext)
    const [, updateLon] = useContext(LonContext)

    /**IDIOMA */
    const [lng,updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global")
  


    const [btn, setBtn] = useState(true)
    const handleClick = e => {
        if (btn === true) {
            setBtn(false)
            updateUnit('imperial')
        } else if (btn === false) {
            setBtn(true)
            updateUnit('metric')
        }
    }

    const searchLoc = e => {
        if (e.key === 'Enter') {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${API_KEY.key2}&lang=${lng}`)
                .then(r => r.json())
                .then(d => {
                    updateLat(d.coord.lat)
                    updateLon(d.coord.lon)
                    updateCityContext([d])          
                   
                    updateLocation('')
                })
        }
    }

    const handleChange = e => {
        if(e.target.value === "en"){
            i18n.changeLanguage("en")
            updateLng("en")
        }else if(e.target.value==="es"){
            i18n.changeLanguage("es")
            updateLng("es")
        }
    }

  

    return (

        <Container fluid>
            <Row style={{ alignItems: 'center', display: 'flex' }} lg={12}>
                <Col lg={3}>
                    <img className='logo-img' src={logo}></img>
                </Col>
              
               
                <Col lg={4}>
                
                    <Form.Control
                        
                        type="text"
                        id="inputSearch"
                        placeholder={t("global.placeholder")}
                        value={location}
                        onChange={e => updateLocation(e.target.value)}
                        onKeyPress={searchLoc}
                    />
                    
                </Col>

                <Col lg={1}  >
                    
                    <div className='div-celsius'>
                        <button  className='placeholder-icon'>
                           <img className='img-placeholder' src={iconPlaceholder}></img>
                        </button>
                        <button onClick={handleClick} className={btn === true ? 'celsius' : 'fahrenheit'}>
                            <p>ºC</p>
                        </button>
                        <button onClick={handleClick} className={btn === true ? 'fahrenheit' : 'celsius'}>
                            <p>ºF</p>
                        </button>
                    </div>

                </Col>
                <Col lg={1}>
                    <div>
                        <img src={mundo} />
                        <select onChange={handleChange} name='idioms' style={{ background: 'none', border: 'none' }} >
                            <option value='es'>ES</option>
                            <option value='en'>EN</option>
                        </select>
                       
                    </div>

                </Col>

                <Col md={{ offset: 2 }}>
                    <p>Aqui menu</p>
                </Col>
            </Row>

        </Container>

    )
}

export default Header