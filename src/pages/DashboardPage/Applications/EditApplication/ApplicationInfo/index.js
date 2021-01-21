import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { updateListing } from '../../../../../services/applicationService';


function ApplicationInfo(props) {
    let { id } = useParams();
    const listingData = props.preloadedData;
    console.log('listing data')
    console.log(listingData)

    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
        companyName: listingData.companyName ? listingData.companyName : "",
        jobTitle: listingData.jobTitle ? listingData.jobTitle : "",
        dateApplied: listingData.dateApplied ? listingData.dateApplied : "",
        interviewDate: listingData.interviewDate ? listingData.interviewDate : "",
        contactName: listingData.contactName? listingData.contactName : "",
        notes: listingData.notes ? listingData.notes : "",
    }};

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