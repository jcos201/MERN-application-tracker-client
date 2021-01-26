import { useState, useEffect } from 'react';
import { Hint } from 'react-autocomplete-hint';

import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from './AddApplication.module.css'

import { addListing } from '../../../../services/applicationService';
import { getToken } from '../../../../services/tokenService';

// const BASE_URL = 'http://localhost:3001/users' Development URL
const BASE_URL = 'https://react-job-search-app.herokuapp.com/users'

function AddApplication (props) {
    const [formState, setFormState] = useState(getInitialFormState);

    const [options, setOptions] = useState([]);
    
    function getInitialFormState() {
        return {
        token: getToken(),
        companyName: "",
        jobTitle: "",
        dateApplied: "",
        interviewDate: "",
        contactName: "",
        notes: "",
    }};

    function handleChange (event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    };

    useEffect(() => {
        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/companynames', requestOptions)
            .then(response => response.json())
            .then(data => setOptions(data));

        //console.log(options)
        
    }, [])

    async function handleSubmit (event) {
        try {
            event.preventDefault();

            await addListing(formState);

            props.history.push('/applications');
            
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <Container className={styles.form}>
            <form >
                <Row>
                    <Col xs={6} md={6}>
                    <Hint options={options}>
                    <input
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange} 
                    required
                    />
                    </Hint>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                    <input
                    name="jobTitle"
                    type="text"
                    placeholder="Position Applied For"
                    onChange={handleChange} 
                    />
                    </Col>
                </Row>
                <Row className={styles.dateRow}>
                    <Col xs={5} md={5}>
                    <label>Date Applied: </label>
                    </Col>
                    <Col xs={7} md={7}>
                    <input
                    name="dateApplied"
                    type="date"
                    placeholder="Date Applied"
                    onChange={handleChange} 
                    />
                    </Col>
                </Row>
                <Row className={styles.dateRow}>
                    <Col xs={5} md={5}>
                    <label>Date of Interview: </label>
                    </Col>
                    <Col xs={7} md={7}>
                    <input
                    name="interviewDate"
                    type="date"
                    defaultValue="Date of Interview"
                    onChange={handleChange} 
                    />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                    <input
                    name="contactName"
                    type="text"
                    placeholder="Name of Contact"
                    onChange={handleChange} 
                    />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                    <input
                    name="notes"
                    type="text"
                    placeholder="Notes"
                    onChange={handleChange} 
                    />
                    </Col>
                </Row>
                <Row>
                    <Button onClick={handleSubmit} className={styles.button}>Submit</Button>
                </Row>

            </form>
        </Container>
    );
}

export default AddApplication;