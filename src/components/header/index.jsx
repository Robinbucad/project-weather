import { useContext, useState } from 'react'
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/img/logo-airbnb-tiempo.svg'
import { IdiomContext, TemperatureContext } from '../../context/temperature.context'
import './style.css'
import { API_KEY } from '../../config.js'
import { useOneCity } from '../../custom-hook/oneCity'
import { SearchContext } from '../../context/search.context'
import { UsePlaces } from '../../custom-hook/googleApi'
import mundo from '../../assets/img/idioma.png'
import { useTranslation } from 'react-i18next'



function Header() {
    const [unit, updateUnit] = useContext(TemperatureContext)
    const [location, updateLocation] = useState('')
    const { cityOne, updateCity } = useOneCity()
    const [city, updateCityContext] = useContext(SearchContext)
    const [lng,updateLng] = useContext(IdiomContext)

    const [t, i18n] = useTranslation("global")

  console.log(lng)

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
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY.key4}`)
                .then(r => r.json())
                .then(d => {
                    updateCityContext([d])

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

                <Col lg={3}>
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
                            <option value='es'>Es</option>
                            <option value='en'>En</option>
                        </select>
                       
                    </div>

                </Col>

                <Col md={{ offset: 3 }}>
                    <p>Aqui menu</p>
                </Col>
            </Row>

        </Container>

    )
}

export default Header