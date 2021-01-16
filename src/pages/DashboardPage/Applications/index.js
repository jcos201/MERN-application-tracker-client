import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUser } from '../../../services/userService'
import { getToken } from '../../../services/tokenService';
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
            .then(data => setApplicationsState(JSON.stringify(data.applicationArray))).then(() => {

                console.log('applicationState after fetch:');
                console.log(applicationsState)
                console.log('finished Fetch')
            }
            );
        
    }, [])    

    return (
        <>
        <Link to="/addApplication"><button>Add Application</button></Link>
        <div>{props.user.firstName}'s Job Applications Page</div>
        <div>Number of Job Applcations: {applicationsState.length}</div>
        {applicationsState.length > 0 ? 
        <tbody>
        <table>
            <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Date Applied</th>
            <th>Interview Date</th>
            <th>Contact Name</th>
            <th>Notes</th>
            </tr>
            <tr>

            </tr>
        </table>
        </tbody>
            :
        <p>There are no applications here</p>}
        </>
    )
}

export default ApplicationsPage;