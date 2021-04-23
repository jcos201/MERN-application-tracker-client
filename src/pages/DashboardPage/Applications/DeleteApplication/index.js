import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getToken } from '../../../../services/tokenService'

import {  Row, Button, Table } from 'react-bootstrap'
import styles from './DeleteApplication.module.css'


// const BASE_URL = 'http://localhost:3001/users' Development URL
const BASE_URL = 'https://react-job-search-app.herokuapp.com/users'

function DeleteApplication(props) {
    let { id } = useParams();

    const [singleListingData, setSingleListingData] = useState([]);

    useEffect(() => {
        
        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/applications/' + id, requestOptions)
            .then(response => response.json())
            .then(data => setSingleListingData(data.listing))
        
        }, [id]);
        
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

    return output === 2 ? [week[dayOfWeek], [month, day, year].join('/')].join(' ') : [month, day, year].join('/');

}


    //console.log(id);

    function handleSubmit() {
        //console.log('will handle deletion');
        const requestOptions = {
            method: "DELETE",
            headers: {
                'Authorization':  'Bearer ' + getToken() }
        };
        fetch(BASE_URL + '/delete/' + id, requestOptions)
            .then(() => console.log('Delete Succesful'));
        
        props.history.push('/applications')
};
    return(
        <>
        { !!singleListingData ? 
        <>
        <Row className={styles.rowText}>Are you sure you'd like to permanently delete the following application?</Row>
        <Row className={styles.rowAlign}>
        <Table striped bordered size="sm">
            <tr><th>Company Name</th><td>{singleListingData.companyName}</td></tr>
            <tr><th>Position</th><td>{singleListingData.jobTitle}</td></tr>
            <tr><th>Date Applied</th><td>{singleListingData.dateApplied ? formatDate(singleListingData.dateApplied) : ''}</td></tr>
            <tr><th>Interview Date</th><td>{singleListingData.interviewDate ? formatDate(singleListingData.interviewDate, 2) : ''}</td></tr>
            <tr><th>Contact Name</th><td>{singleListingData.contactName}</td></tr>
            <tr><th>Notes</th><td>{singleListingData.notes}</td></tr>
        </Table>
        </Row>
        <Row className={styles.rowAlign}>
        <div className={styles.divAlign}>
            <Link to={"/applications"}><Button>Cancel</Button></Link>
            <Button onClick={handleSubmit} className={styles.confirmBtn} class="btn-danger btn-sm">Confirm Application Deletion</Button>
        </div>
        </Row>
        </>
        :
        <p>Loading...</p>
}
        </>
    )
}

export default DeleteApplication;