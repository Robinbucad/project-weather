import Header from "../header"
import Activities from "../activities"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import CurrentWeather from "../currentweather"



function HomePage() {
    return (
        <Container style={{paddingLeft:'10rem', paddingRight:'10rem'}} fluid >

            <Container fluid  style={{marginBottom:'30px'}} >
                <Row >
                    <Col  lg={12}><Header></Header></Col>
                </Row>
            </Container>


            <Container fluid style={{ display: 'flex'}}>
                <Row>
                    <Col  style={{ width:'25rem'}} lg={12} >
                        <CurrentWeather></CurrentWeather>
                    </Col>


                </Row>
                <Container style={{ flexDirection: 'column', display: 'flex' }}>
                    <Row>
                        <Col  style={{ display:'flex', gap:'1rem' }} lg={12}>


                    {/**ESTO SE TENDRA QUE BORRAR, ESTA DE EJEMPLO */}
                        <Card style={{ width: '15%', height:'14rem',marginBottom:'3%', background:'#FF385C',borderRadius:'12px' }}>
                               
                                <Card.Body>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Aqui card temperatura futura
                                    </Card.Text>
                                  
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15%', height:'14rem', borderRadius:'12px' }}>
                              
                                <Card.Body>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Aqui card temperatura futura
                                    </Card.Text>
                                  
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15%', height:'14rem', borderRadius:'12px' }} >
                              
                                <Card.Body>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Aqui card temperatura futura
                                    </Card.Text>
                                  
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15%', height:'14rem', borderRadius:'12px' }}>
                              
                                <Card.Body>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Aqui card temperatura futura
                                    </Card.Text>
                                  
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15%', height:'14rem', borderRadius:'12px' }}>
                             
                                <Card.Body>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Aqui card temperatura futura
                                    </Card.Text>
                                  
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15%', height:'14rem', borderRadius:'12px' }}>
                               
                                <Card.Body>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Aqui card temperatura futura
                                    </Card.Text>
                                  
                                </Card.Body>
                            </Card>

                            {/**ESTO SE TENDRA QUE BORRAR, ESTA DE EJEMPLO */}
                            
                        </Col>
                    </Row>

                    <Row>
                        <Activities></Activities>
                    </Row>
                </Container>

            </Container>
        </Container>
    )
}

export default HomePage