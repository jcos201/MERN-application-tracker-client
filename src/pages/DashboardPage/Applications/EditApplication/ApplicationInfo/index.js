import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { updateListing } from '../../../../../services/applicationService';

import { Button, Container, Card, Col, Row } from 'react-bootstrap'
import styles from './ApplicationInfo.module.css'



function ApplicationInfo(props) {
    let { id } = useParams();
    const listingData = props.preloadedData;
    console.log('listing data')
    console.log(listingData)

    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        if(listingData.dateApplied) {console.log(listingData.dateApplied)}

        let interviewDate = ''
        let dateApplied = ''

        if(listingData.interviewDate)  {
            interviewDate += `${formatDate(listingData.interviewDate)}`;
            console.log(interviewDate)
        
        }
        
        if(listingData.dateApplied)  {
            dateApplied += `${formatDate(listingData.dateApplied)}`;
            console.log(dateApplied)
        }

        return {
        companyName: listingData.companyName ? listingData.companyName : "",
        jobTitle: listingData.jobTitle ? listingData.jobTitle : "",
        dateApplied: listingData.dateApplied ? dateApplied : "",
        interviewDate: listingData.jobTitle ? interviewDate : "",
        contactName: listingData.contactName? listingData.contactName : "",
        notes: listingData.notes ? listingData.notes : "",
    }};

    function formatDate(date, output) {
        var week = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate() + 1),
            year = d.getFullYear(),
            dayOfWeek = d.getDay();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        
        console.log(`dayte = ${date}`)
    
        return output === 2 ? [week[dayOfWeek], [year, month, day].join('-')].join(' ') : [year, month, day].join('-');

    }

    async function handleSubmit (event) {
        try {
            event.preventDefault();
            //console.log('from inside handleSubmit')
            //console.log(formState);
            await updateListing(formState, id);
            //console.log('made it back to handlesubmit')
            props.history.push('/applications');
            
        } catch (error) {
            alert(error.message)
        }
    }

    function handleChange (event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <Container >
            <form>
                <Row>
                    <Col xs={6} md={6}>
                    <input
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    value={formState.companyName}
                    onChange={handleChange} 
                    required
                    />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                    <input
                    name="jobTitle"
                    type="text"
                    placeholder="Position Applied For"
                    value={formState.jobTitle}
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
                    value={formState.dateApplied}
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
                    placeholder="Date of Interview"
                    value={formState.interviewDate}
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
                    value={formState.contactName}
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
                    value={formState.notes}
                    onChange={handleChange} 
                    />
                    </Col>
                </Row>
                <Row>
                    <Button onClick={handleSubmit} className={styles.button}>Update</Button>
                </Row>

            </form>
        </Container>
    );
}

export default ApplicationInfo;