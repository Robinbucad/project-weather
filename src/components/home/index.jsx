import Header from "../header"
import Activities from "../activities"
import { Container, Row, Col} from "react-bootstrap"
import CurrentWeather from "../currentWeather"
import ForecastWeather from "../forecastWeather"
import './style.scss'

function HomePage() {
    return (
        <Container className="main-pageContainer" fluid >

            <Container fluid className="header-cont" >
                <Row >
                    <Col lg={12}><Header></Header></Col>
                </Row>
            </Container>

            <Container fluid className="current-cont">
                <Row>
                    <Col className="col-current" lg={6} >
                        <CurrentWeather></CurrentWeather>
                    </Col>
                </Row>

                <Container className="fore-cont">
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

