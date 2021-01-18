import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getToken } from '../../../../../services/tokenService';

function ApplicationInfo(props) {
    const listingData = props.preloadedData;
    console.log('listing data')
    console.log(listingData)



    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
        token: getToken(),
        companyName: listingData.companyName ? listingData.companyName : "",
        jobTitle: listingData.jobTitle ? listingData.jobTitle : "",
        dateApplied: listingData.dateApplied ? listingData.dateApplied : "",
        interviewDate: listingData.interviewDate ? listingData.interviewDate : "",
        contactName: listingData.contactName? listingData.contactName : "",
        notes: listingData.notes ? listingData.notes : "",
    }};

    function handleSubmit() {

    }

    function handleChange (event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    value={formState.companyName}
                    onChange={handleChange} 
                    required
                    />
                    <input
                    name="jobTitle"
                    type="text"
                    placeholder="Position Applied For"
                    value={formState.jobTitle}
                    onChange={handleChange} 
                    />
                    <input
                    name="dateApplied"
                    type="date"
                    placeholder="Date Applied"
                    value={formState.dateApplied}
                    onChange={handleChange} 
                    />
                    <input
                    name="interviewDate"
                    type="date"
                    placeholder="Date of Interview"
                    value={formState.interviewDate}
                    onChange={handleChange} 
                    />
                    <input
                    name="contactName"
                    type="text"
                    placeholder="Name of Contact"
                    value={formState.contactName}
                    onChange={handleChange} 
                    />
                    <input
                    name="notes"
                    type="text"
                    placeholder="Notes"
                    value={formState.notes}
                    onChange={handleChange} 
                    />

                    <button>Update</button>
                </div>

            </form>
        </div>
    );
}

export default ApplicationInfo;