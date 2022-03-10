import { useContext, useState } from 'react'
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/img/logo-airbnb-tiempo.svg'
import { TemperatureContext } from '../../context/temperature.context'
import './style.css'
import { API_KEY } from '../../config.js'
import { useOneCity } from '../../custom-hook/oneCity'


function Header() {
    const [unit, updateUnit] = useContext(TemperatureContext)
    const [location, updateLocation] = useState('')
    const { cityOne, updateCity } = useOneCity()

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
        if(e.key === 'Enter'){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY.key4}`)
            .then(r => r.json())
            .then(d => updateCity([d]))
        }
    }

    


 

    return (

        <Container fluid>
            <Row  style={{ alignItems: 'center', display:'flex'}} lg={12}>
                <Col lg={3}>
                    <img className='logo-img' src={logo}></img>
                </Col>

                <Col  lg={4}>
                    <Form.Control
                        type="text"
                        id="inputSearch"
                        placeholder='Busca una ciudad'
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

                <Col md={{offset: 3}}>
                <p>Aqui menu</p>
                </Col>
            </Row>

        </Container>

    )
}

export default Header