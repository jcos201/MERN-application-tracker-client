import { Link } from 'react-router-dom'
import styles from './Dashboard.module.css'
import { Container, Row, Col } from 'react-bootstrap'

function DashboardPage (props) {
    return(
        <Container className={styles.page}> 
            <Row className={styles.text}>{props.user.firstName}'s Dashboard Page</Row>
            <Row xs={1} md={2} className={styles.rowCol}>
            <Col className={styles.article}>
            <Link to="/jobsearch" ><article>My Job Search</article></Link>
            </Col>
            <Col  className={styles.article}>
            <Link to="/applications"><article>Applications</article></Link>
            </Col>
            </Row>
        </Container>
    )

}

export default DashboardPage;