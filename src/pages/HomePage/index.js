import logo from '../../ApplicationTracker.png'
import styles from './HomePage.module.css'

import { Container, Row } from 'react-bootstrap'

function HomePage (props) {
    return(
        <Container className={styles.div}>
            <Row>An online resource to help with your job search.</Row>
            <Row>Search Jobs, save your searches and track applications you've submitted.</Row>
            <Row>Sign up or Login to continue.</Row>
            <img src={logo} className={styles.img} alt="Search Jobs, save your searches and track applications you've submitted."/>
        </Container>
    )

}

export default HomePage;