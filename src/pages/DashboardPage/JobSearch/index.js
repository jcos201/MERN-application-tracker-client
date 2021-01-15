import { useState } from 'react';
import { getUser } from '../../../services/userService'
import { getToken } from '../../../services/tokenService'
import { addSearch } from '../../../services/jobSearchServices';

function JobSearchPage(props){
    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
        token: getToken(),
        user: getUser(),
        jobKeyword: "",
        city: "",
        state1: "",
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

            await addSearch(formState);

            
        } catch (error) {
            
        }
    }

    return(
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    name="jobKeyword"
                    type="text"
                    size="30"
                    placeholder="Company, Position or Keyword"
                    onChange={handleChange} 
                    />
                    <input
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={handleChange} 
                    />
                    <input
                    name="state1"
                    type="text"
                    placeholder="State"
                    onChange={handleChange} 
                    />
                    <button>Save Job Search</button>
                </div>

            </form>
        </div>
    );
}



export default JobSearchPage;