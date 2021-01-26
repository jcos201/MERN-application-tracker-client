import { Link } from 'react-router-dom'
import styles from './Dashboard.module.css'
import { Container, Row, Col } from 'react-bootstrap'

function DashboardPage (props) {
    return(
        <Container className={styles.page}> 
            <Row className={styles.text}>{props.user.firstName}'s Dashboard Page</Row>
            <Row xs={1} md={2} className={styles.rowCol}>
            
            <Link to="/jobsearch" className={styles.article}>
            <Col className={styles.colText}>
                <article>My Job Search</article>
            </Col>
            </Link>
            <Link to="/applications" className={styles.article}>
            <Col  className={styles.colText}>
                <article>Applications</article>
            </Col>
                </Link>
            </Row>
        </Container>
    )

}

export default DashboardPage;