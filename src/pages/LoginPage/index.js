import { useState } from 'react';
import { login } from '../../services/userService'

import styles from './Login.module.css'
import { Container, Col, Row, Button } from 'react-bootstrap'

function LoginPage (props) {
    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
        email: "",
        password: "",
    }}

    function handleChange (event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit (event) {
        try {
            event.preventDefault();

            await login(formState);

            setFormState(getInitialFormState);
            props.handleSignupOrLogin();

            props.history.push('/dashboard');

        } catch (error) {
            alert(error.message);
        }
    }
    return(
        <Container >
            <Row className={styles.formRow}>
            <Col sm={1} md={1} lg={3}></Col>
            <Col className="formDiv"  sm={3} md={6} lg={5}>
            <form>
                <div>
                    <input 
                    value={formState.email} 
                    onChange={handleChange}
                    placeholder="Email" 
                    name="email" 
                    type="email"
                    required />
                </div>
                <div>
                    <input 
                    value={formState.password} 
                    onChange={handleChange} 
                    placeholder="Password"
                    name="password" 
                    type="password"
                    required />
                    <br/>
                </div>
                <div>
                    <Button className={styles.button} onClick={handleSubmit}>Login</Button>
                </div>

            </form>
            </Col>
            <Col sm={1} md={1} lg={3}></Col>
            </Row>
        </Container>
    );

}

export default LoginPage;