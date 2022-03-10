import { Container } from "react-bootstrap"
import { Card, ListGroup, ListGroupItem, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import './style.css'
import bicicleta from '../../assets/img/bicicleta.jpg'
import drinking from '../../assets/img/drinking.jpg'
import flamenco from '../../assets/img/flamenco.jpg'
import museum from '../../assets/img/museum.jpg'
import { useOneCity } from "../../custom-hook/oneCity"

function Activities() {

    const { cityOne } = useOneCity()

    return (
        <Container className="container-activities" >

            <Container >
                <Row>
                    <Col >
                        <h2 style={{display:'flex', gap:'5px'}} className="title-activities">Las mejores actividades para el clima de hoy en <p className="city-title">{cityOne.map(e => e.name)}</p></h2>
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
                        <Col style={{display:'flex', justifyContent:'space-between'}}  lg={2}>
                                <p>Mostrar</p>
                                <p>Flechas</p>
                            </Col>
                        
                    </Row>
                </Container>

            </Container>

            <Container className="activities-container">


                <article>
                    <Card style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                        <Card.Img variant="top" className="img-acti" src={bicicleta} />



                    </Card>
                    <footer className="footer-card">
                        <p>Valoración</p>
                        <p>Descripción</p>
                        <p>Precio</p>
                    </footer>
                </article>

                <article>
                    <Card style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity" >
                        <Card.Img variant="top" src={flamenco} />



                    </Card>
                    <footer className="footer-card">
                        <p>Valoración</p>
                        <p>Descripción</p>
                        <p>Precio</p>
                    </footer>
                </article>

                <article>
                    <Card style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                        <Card.Img variant="top" src={drinking} />
                        <Card.Body>


                        </Card.Body>


                    </Card>
                    <footer className="footer-card">
                        <p>Valoración</p>
                        <p>Descripción</p>
                        <p>Precio</p>
                    </footer>
                </article>

                <article>
                    <Card style={{ borderRadius: '12px', background: 'none', border: 'none' }} className="card-activity">
                        <Card.Img variant="top" src={museum} />



                    </Card>
                    <footer className="footer-card">
                        <p>Valoración</p>
                        <p>Descripción</p>
                        <p>Precio</p>
                    </footer>
                </article>
            </Container>


        </Container>
    )
}

export default Activities