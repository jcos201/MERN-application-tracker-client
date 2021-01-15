import { useState } from 'react';
import { getUser } from '../../../../services/userService'
import { addListing } from '../../../../services/applicationService'
import { getToken } from '../../../../services/tokenService'

function AddApplication (props) {
    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
        token: getToken(),
        user: getUser(),
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
    }

    async function handleSubmit (event) {
        try {
            event.preventDefault();

            await addListing(formState);

            console.log(getUser())

            props.history.push('/dashboard');
            
        } catch (error) {
            
        }
    }

    return(
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange} 
                    required
                    />
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