import { useState, useEffect } from 'react';
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
        if(event.target.name === 'state1') {
            console.log('state1 was changed')
            console.log(event.target.value)
                }
    }

    async function handleSubmit (event) {
        try {
            event.preventDefault();

            await addSearch(formState);

            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        console.log('state1 changed to');
        console.log(formState.state1)
       //formState.state1.value : formState.state1;
    }, [formState.state1])

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
                    <select
                    name="state1"
                    value={formState.state1}
                    onChange={handleChange}
                    >
                        <option value="">State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DC">District of Columbia</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <button>Save Job Search</button>
                </div>

            </form>
        </div>
    );
}



export default JobSearchPage;