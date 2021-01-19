import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getToken } from '../../../../services/tokenService'

const BASE_URL = 'http://localhost:3001/users';

function DeleteApplication(props) {
    let { id } = useParams();

    const [singleListingData, setSingleListingData] = useState([]);

    useEffect(() => {
        console.log('inside delete option useEffect');

        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/applications/' + id, requestOptions)
            .then(response => response.json())
            .then(data => setSingleListingData(data.listing))

        console.log('setListingdata')
        console.log(singleListingData);
            //(data => setApplicationsState(data.applicationArray))
        
        
        
    }, []);



    console.log(id);

    function handleSubmit() {
        console.log('will handle deletion');
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
        <p>Are you sure you'd like to permanently delete the following application?</p>
        <tbody>
        <table>
            <tr><th>Company Name</th><td>{singleListingData.companyName}</td></tr>
            <tr><th>Position</th><td>{singleListingData.jobTitle}</td></tr>
            <tr><th>Date Applied</th><td>{singleListingData.dateApplied}</td></tr>
            <tr><th>Interview Date</th><td>{singleListingData.interviewDate}</td></tr>
            <tr><th>Contact Name</th><td>{singleListingData.contactName}</td></tr>
            <tr><th>Notes</th><td>{singleListingData.notes}</td></tr>
        </table>
        </tbody>
        <div>
            <Link to={"/applications"}><button>Cancel</button></Link>
            <button onClick={handleSubmit}>Delete</button>
        </div>
        </>
    )
}

export default DeleteApplication;