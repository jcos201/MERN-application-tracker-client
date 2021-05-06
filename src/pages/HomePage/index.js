import logo from '../../ApplicationTracker.png'
import styles from './HomePage.module.css'

import { Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

function HomePage (props) {
    return(
        <>
        <Row className={styles.row}><h3>An online resource to help with your job search.</h3></Row>
        <Col className={styles.text}>
            <Row>
                <Col sm={ {span:7, order:'first' }} xs={{ span:18, order: 'last' }}>
                    <Fade duration={3000}>
                    <img src={logo} className={styles.img} alt="Search Jobs, save your searches and track applications you've submitted."/>
                    </Fade>
                </Col>
                <Col sm={{ span:5, order:'last' }} xs={{ span:18, order: 'first' }} className={styles.h4Col}> 
                    <Fade delay={1000} right cascade duration={1500}>
                        <Row className={styles.animatedText}>Search Jobs.</Row>
                    </Fade>
                    <Fade delay={1500} right cascade duration={1500}>
                        <Row className={styles.animatedText}>Save those searches.</Row>
                    </Fade>
                    <Fade delay={2000} right cascade duration={1500}>
                        <Row className={styles.animatedText}>Track applications submitted.</Row>
                    </Fade>
                </Col>
            </Row>
            <hr/>
            <Row className={styles.row}><h3>Sign up or Login to continue.</h3></Row>
        </Col>
        </>
    )

}

export default HomePage;