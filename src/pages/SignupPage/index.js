import { useState } from 'react';
import { signup } from '../../services/userService';

import { Container, Col, Row, Button } from 'react-bootstrap'
import styles from './Signup.module.css'

function SignupPage (props) {
    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }}

    /* 
    handleChange = every time keydown on input fields: 
        spread out previous form state and update field keydown was initiated on
    */
    function handleChange (event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    /*
    Asynchronous function to handle submission of login data

    Try / Catch will test for errors in input fields.
        - If error alert user to error
        - If successful:
            - Await signup function from services.js to execute to create new user and token
            - Clear signup form
            - handlSignupOrLogin function will get newly created user and set user state to newly created user
                this will allow user's application and job search entries to be saved to this specific user
            - render dashboard landing page for newly created user
    */
    async function handleSubmit (event) {
        try {
            event.preventDefault();

            await signup(formState);

            setFormState(getInitialFormState);
            props.handleSignupOrLogin();

            props.history.push('/dashboard');

        } catch (error) {
            alert(error.message);
        }

    }
    return(
        <Container>
            <Row className={styles.formRow}>
                <Col className="formDiv"  sm={12} md={6} lg={6}>
                    <form className={styles.formBox}>
                        <div><input 
                        value={formState.firstName} 
                        onChange={handleChange} 
                        placeholder="First Name"
                        name="firstName" 
                        type="text"
                        required />
                        </div>
                        <div><input 
                        value={formState.lastName} 
                        onChange={handleChange} 
                        placeholder="Last Name"
                        name="lastName" 
                        type="text" />
                        </div>
                        <div><input 
                        value={formState.email} 
                        onChange={handleChange} 
                        placeholder="Email"
                        name="email" 
                        type="email"
                        required />
                        </div>
                        <div><input 
                        value={formState.password} 
                        onChange={handleChange} 
                        placeholder="Password"
                        name="password" 
                        type="password"
                        required />
                        </div>
                        <Button className={styles.button} onClick={handleSubmit}>Sign Up</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );

}

export default SignupPage;