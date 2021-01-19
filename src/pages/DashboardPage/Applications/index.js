import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getToken } from '../../../services/tokenService'

import ApplicationRow from './ApplicationRow'

const BASE_URL = 'http://localhost:3001/users';

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
        <Link to="/addApplication"><button>Add Application</button></Link>
        <div>{props.user.firstName}'s Job Applications Page</div>
        {applicationsState && applicationsState.length > 0 ? 
        <tbody>
        <table>
        <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Date Applied</th>
            <th>Interview Date</th>
            <th>Contact Name</th>
            <th>Notes</th>
            <th></th>
            <th></th>
            </tr>
        {applicationsState.map((listing, idx) => {
            return (<ApplicationRow 
                companyName={listing.companyName}
                jobTitle={listing.jobTitle}
                dateApplied={listing.dateApplied}
                interviewDate={listing.interviewDate}
                contactName={listing.contactName}
                notes={listing.notes}
                appId={listing._id}
                key={idx}
                />)
        })}
        
        </table>
        </tbody>        
            :
        <p>There are no applications here</p>}
        </>
    )
}

export default ApplicationsPage;