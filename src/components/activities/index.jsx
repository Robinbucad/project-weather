import { Container } from "react-bootstrap"
import { Card, ListGroup, ListGroupItem, Row, Col, Button } from 'react-bootstrap'
import './style.css'
import bicicleta from '../../assets/img/bicicleta.jpg'
import drinking from '../../assets/img/drinking.jpg'
import flamenco from '../../assets/img/flamenco.jpg'
import museum from '../../assets/img/museum.jpg'

function Activities() {
    return (
        <Container className="container-activities" >

            <Container >
                <Row>
                    <Col>
                        <h2>Las mejores actividades para el clima de hoy en Madrid</h2>
                    </Col>
                </Row>
                <Row className="row-inputs">
                    <Col m={2}>
                        <Button className="btn-filter" variant="outline-danger">Arte y cultura</Button>
                    </Col>

                    <Col m={1}>
                        <Button className="btn-filter" variant="outline-danger">Ocio</Button>
                    </Col >

                    <Col style={{justifyContent:'center', display:'flex'}} lg={3}>
                        <Button className="btn-filter" variant="outline-danger">Comida y bebida</Button>
                    </Col>

                    <Col m={1}>
                        <Button className="btn-filter" variant="outline-danger">Deportes</Button>
                    </Col>

                    <Col m={1}>
                        <Button className="btn-filter" variant="outline-danger">Filtros</Button>
                    </Col>
                </Row>
            </Container>

            <Container className="activities-container">
                <article>
                    <Card style={{borderRadius:'12px'}} className="card-activity">
                        <Card.Img variant="top" className="img-acti" src={bicicleta} />
                     


                    </Card>
                    <footer>
                        <p>Valoración</p>
                        <p>Descripción</p>
                        <p>Precio</p>
                    </footer>
                </article>

                <article>
                    <Card style={{borderRadius:'12px'}} className="card-activity" >
                        <Card.Img variant="top" src={flamenco} />
                       


                    </Card>
                    <footer>
                        <p>Valoración</p>
                        <p>Descripción</p>
                        <p>Precio</p>
                    </footer>
                </article>

                <article>
                    <Card style={{borderRadius:'12px'}} className="card-activity">
                        <Card.Img variant="top"  src={drinking} />
                        <Card.Body>
                       

                        </Card.Body>


                    </Card>
                    <footer>
                        <p>Valoración</p>
                        <p>Descripción</p>
                        <p>Precio</p>
                    </footer>
                </article>

                <article>
                    <Card style={{borderRadius:'12px'}} className="card-activity">
                        <Card.Img variant="top"  src={museum} />
                      


                    </Card>
                    <footer>
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