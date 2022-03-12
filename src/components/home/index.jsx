import Header from "../header"
import Activities from "../activities"
import { Container, Row, Col} from "react-bootstrap"
import CurrentWeather from "../currentWeather"
import ForecastWeather from "../forecastWeather"


function HomePage() {
    return (
        <Container style={{ paddingLeft: '6rem', paddingRight: '6rem' }} fluid >

            <Container fluid style={{ marginBottom: '30px' }} >
                <Row >
                    <Col lg={12}><Header></Header></Col>
                </Row>
            </Container>

            <Container fluid style={{ display: 'flex' }}>
                <Row>
                    <Col style={{ width: '25rem' }} lg={6} >
                        <CurrentWeather></CurrentWeather>
                    </Col>
                </Row>

                <Container style={{ flexDirection: 'column', display: 'flex' }}>
                    <Row>
                        <Col style={{ display: 'flex', gap: '1rem' }} lg={12}>
                            <ForecastWeather></ForecastWeather>
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

