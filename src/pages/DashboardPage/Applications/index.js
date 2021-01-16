import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUser } from '../../../services/userService'
import { getToken } from '../../../services/tokenService'

import ApplicationRow from './ApplicationRow'

const BASE_URL = 'http://localhost:3001/users';

function ApplicationsPage (props) {
    const [applicationsState, setApplicationsState] = useState([]);

    //console.log(props.user)


    useEffect(() => {
        const userId = getUser()._id;
        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/applications/' + userId, requestOptions)
            .then(response => response.json())
            .then(data => setApplicationsState(data.applicationArray))

      //      console.log(applicationsState.applicationArray.length);

        
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
            return (<tr>
            <td>{listing.companyName}</td>
            <td>{listing.jobTitle}</td>
            <td>{listing.dateApplied}</td>
            <td>{listing.interviewDate}</td>
            <td>{listing.contactName}</td>
            <td>{listing.notes}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
            </tr>)
        })}
        
        </table>
        </tbody>        
            :
        <p>There are no applications here</p>}
        </>
    )
}

export default ApplicationsPage;