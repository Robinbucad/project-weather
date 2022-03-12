import { Container } from "react-bootstrap"
import { Card, ListGroup, ListGroupItem, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import './style.css'
import bicicleta from '../../assets/img/bicicleta.jpg'

import { usePlaces } from "../../custom-hook/googleApi"
import { useTranslation } from 'react-i18next'
import { valenciaSol } from '../../objects/valencia/'
import valenciaSol1 from '../../assets/img/valencia/valenciaSol1.svg'
import valencia2Sol from '../../assets/img/valencia/valenciaSol2.svg'
import valenciaSol3 from '../../assets/img/valencia/valenciaSol3.svg'
import valenciaSol4 from '../../assets/img/valencia/valenciaSol4.svg'
import { useState } from "react"
import Slider from "react-slick"
import { useContext } from "react"
import { GoogleContext } from "../../context/googleApiContext/google.context"
import { useMoreCities } from "../../custom-hook/moreCities"
import { SearchContext } from "../../context/search.context"





function Activities() {


    const [place, updatePlace] = useContext(GoogleContext)
    const [valencia, updateValencia] = useState(valenciaSol)

    const handleImgAct = (img) => {
        switch (img) {
            case 'valenciaSol': return valenciaSol1
            case 'valencia2Sol': return valencia2Sol
            case 'valenciaSol3': return valenciaSol3
            case 'valenciaSol4': return valenciaSol4
        }
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    const filterCard = e => {
        const filter = valencia.filter(v => v.tag === e.target.value)
        if (e.target.value === 'museum') {
            updateValencia(filter)
            updatePlace(e.target.value)
        } else if (e.target.value === 'night_club') {
            updateValencia(filter)
            updatePlace(e.target.value)
        } else if (e.target.value === 'restaurant') {
            updateValencia(filter)
            updatePlace(e.target.value)
        }else if(e.target.value==='outdoors'){
            updatePlace(e.target.value)
        }else if(e.target.value === 'gym'){
            updatePlace(e.target.value)
        }
    }

    
   

    const filterBack = e => {
        if (e.target.value === 'show') {
            updateValencia(valenciaSol)
        }
    }

    const [t, i18n] = useTranslation("activities")
    const { restaurant } = usePlaces()
    const [city] = useContext(SearchContext)
    console.log(city)


    return (
        <Container className="container-activities" >

            <Container >
                <Row>
                    <Col >
                        <h2 style={{ display: 'flex', gap: '5px',fontSize:'26px', fontWeight:'bold' }} className="title-activities">{t("activities.button7")} <p className="city-title">{city.map(e => e.name)}</p></h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9}>
                        <ButtonGroup style={{ display: 'flex', gap: '1rem' }}>
                            <Button value='museum' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button1")}</Button>
                            <Button value='night_club' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button2")}</Button>
                            <Button value='restaurant' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button3")}</Button>
                            <Button value='outdoors' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button4")}</Button>
                            <Button value='gym' onClick={filterCard} style={{ borderRadius: '20px' }} variant="outline-danger">{t("activities.button5")}</Button>
                            <Button value='show' onClick={filterBack} style={{ borderRadius: '20px' }} variant="outline-danger">Show All </Button>
                        </ButtonGroup>
                    </Col>

                </Row>
            </Container>

            <Container>

                <Container style={{background:'red', marginTop:'42px'}}>
                    <Row>
                        <Col lg={8}>{t("activities.button6")}</Col>
                        <Col style={{ display: 'flex', justifyContent: 'space-between' }} lg={2}>
                            <p>{t("activities.button8")}</p>
                            <p>Flechas</p>
                        </Col>

                    </Row>
                </Container>

            </Container>
            <Container className="activities-container">
                <Row >
                    <Col lg={12}>
                        <Slider {...settings}>
                            {restaurant.map(e => e.results.map(r => (
                                <article >
                                    <Card style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                                        <Card.Img variant="top" className="img-acti" src={bicicleta} />
                                    </Card>
                                    <footer className="footer-card">
                                        <p>{r.rating}</p>
                                        <p>{r.name}</p>
                                        <p>{r.user_ratings_total}</p>
                                        <p>{r.price_level}</p>
                                    </footer>
                                </article>
                            )))}
                        </Slider>
                    </Col>
                </Row>
            </Container>


        </Container>
    )
}

export default Activities



