import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getToken } from '../../../services/tokenService';

import ApplicationRow from './ApplicationRow';

import styles from './Applications.module.css'
import { FileEarmarkPlus } from 'react-bootstrap-icons'

import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// const BASE_URL = 'http://localhost:3001/users' Development URL
const BASE_URL = 'https://react-job-search-app.herokuapp.com/users'

function ApplicationsPage (props) {
    const [applicationsState, setApplicationsState] = useState([]);

    useEffect(() => {
        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/applications', requestOptions)
            .then(response => response.json())
            .then(data => setApplicationsState(data.applicationArray))        
    }, [])    



    return (
        <>
        <Row className={styles.text}>{props.user.firstName}'s Job Applications Page</Row>
        <Row><Link to="/addApplication"><Button className={styles.button} class="btn"><FileEarmarkPlus/> Add Application</Button></Link></Row>
        <Row  className={styles.accordionScroll}>
        {applicationsState && applicationsState.length > 0 ? 
        applicationsState.map((listing, idx) => {
            console.log(listing.dateApplied)
            return (<ApplicationRow 
                {...props}
                companyName={listing.companyName}
                jobTitle={listing.jobTitle}
                dateApplied={listing.dateApplied}
                interviewDate={listing.interviewDate}
                contactName={listing.contactName}
                notes={listing.notes}
                appId={listing._id}
                key={idx}
                />)
        })
            :
        <p>There are no applications here</p>}
        </Row>
        </>
    )
}

export default ApplicationsPage;