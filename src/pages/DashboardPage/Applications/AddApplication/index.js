import { useState, useEffect } from 'react';
import { Hint } from 'react-autocomplete-hint';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import { addListing } from '../../../../services/applicationService';
import { getToken } from '../../../../services/tokenService';

const BASE_URL = 'http://localhost:3001/users';

function AddApplication (props) {
    const [formState, setFormState] = useState(getInitialFormState);

    const [startDate, setStartDate] = useState();

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

        console.log(options)
        
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
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <div>
                    <Hint options={options}>
                    <input
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange} 
                    required
                    />
                    </Hint>
                    <input
                    name="jobTitle"
                    type="text"
                    placeholder="Position Applied For"
                    onChange={handleChange} 
                    />
                    <input
                    name="dateApplied"
                    type="date"
                    placeholder="Date Applied"
                    onChange={handleChange} 
                    />
                    <input
                    name="interviewDate"
                    type="date"
                    placeholder="Date of Interview"
                    onChange={handleChange} 
                    />

                    <input
                    name="contactName"
                    type="text"
                    placeholder="Name of Contact"
                    onChange={handleChange} 
                    />
                    <input
                    name="notes"
                    type="text"
                    placeholder="Notes"
                    onChange={handleChange} 
                    />


                    <button>Submit</button>
                </div>

            </form>
        </div>
    );
}

export default AddApplication;