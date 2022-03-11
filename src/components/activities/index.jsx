import { Container } from "react-bootstrap"
import { Card, ListGroup, ListGroupItem, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import './style.css'
import bicicleta from '../../assets/img/bicicleta.jpg'
import drinking from '../../assets/img/drinking.jpg'
import flamenco from '../../assets/img/flamenco.jpg'
import museum from '../../assets/img/museum.jpg'
import { useOneCity } from "../../custom-hook/oneCity"
import { usePlaces } from "../../custom-hook/googleApi"
import Slider from "react-slick"

function Activities() {


    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    const { cityOne } = useOneCity()
    const { restaurant } = usePlaces()

    console.log(restaurant)

    return (
        <Container className="container-activities" >

            <Container >
                <Row>
                    <Col >
                        <h2 style={{ display: 'flex', gap: '5px' }} className="title-activities">Las mejores actividades para el clima de hoy en <p className="city-title">{cityOne.map(e => e.name)}</p></h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9}>
                        <ButtonGroup style={{ display: 'flex', gap: '1rem' }}>
                            <Button style={{ borderRadius: '20px' }} variant="outline-danger">Arte y cultura</Button>
                            <Button style={{ borderRadius: '20px' }} variant="outline-danger">Ocio</Button>
                            <Button style={{ borderRadius: '20px' }} variant="outline-danger">Comida y bebida</Button>
                            <Button style={{ borderRadius: '20px' }} variant="outline-danger">Deportes</Button>
                            <Button style={{ borderRadius: '20px' }} variant="outline-danger">Filtros</Button>
                        </ButtonGroup>
                    </Col>

                </Row>
            </Container>

            <Container>

                <Container>
                    <Row>
                        <Col lg={8}>Experiencias cerca de ti</Col>
                        <Col style={{ display: 'flex', justifyContent: 'space-between' }} lg={2}>
                            <p>Mostrar</p>
                            <p>Flechas</p>
                        </Col>

                    </Row>
                </Container>

            </Container>

            <Container className="activities-container">


                <section className="section-activities">
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
                </section>









            </Container>


        </Container>
    )
}

export default Activities