import { useState } from 'react'
import { Container, Row, Col, Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/img/logo-airbnb-tiempo.svg'
import './style.css'


function Header() {

    const [btn, setBtn] = useState(true)
    const handleClick = e => {
        if (btn === true) {
            setBtn(false)
        } else if (btn === false) {
            setBtn(true)
        }
    }

    console.log(btn)

    return (

        <Container  >
            <Row  style={{ alignItems: 'center' }}>
                <Col>
                    <img className='logo-img' src={logo}></img>
                </Col>

                <Col lg={3}>
                    <Form.Control
                        type="text"
                        id="inputSearch"
                        placeholder='Busca una ciudad'
                    />
                </Col>

                <Col   md={{ span: 4, offset: 1 }}>
                    <div className='div-celsius'>
                        <button onClick={handleClick} className={btn === true ? 'celsius' : 'fahrenheit'}>
                            <p>ºC</p>
                        </button>
                        <button onClick={handleClick} className={btn === true ? 'fahrenheit' : 'celsius'}>
                            <p>ºF</p>
                        </button>
                    </div>

                </Col>
            </Row>

        </Container>

    )
}

export default Header