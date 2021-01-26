import { useState, useEffect } from 'react';
import { addSearch } from '../../../services/jobSearchServices';

import { getToken } from '../../../services/tokenService'
import SearchRow from './SearchRow'

import { Table, Row, Container, Col, Button } from 'react-bootstrap';
import styles from './JobSearch.module.css'

const BASE_URL = 'http://localhost:3001/users';

function JobSearchPage(props){
    const [formState, setFormState] = useState(getInitialFormState);

    const [jobSearchState, setJobSearchState] = useState([]);

    function getInitialFormState() {
        return {
        jobKeyword: "",
        city: "",
        state1: "",
    }};

    useEffect(() => {
        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/savedsearches', requestOptions)
            .then(response => response.json())
            .then(data => setJobSearchState(data.jobSearchArray));

        //console.log(jobSearchState)
        
    }, [])

    function handleChange (event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit (event) {
        try {
            event.preventDefault();
            const updatedArray = await addSearch(formState);

            setJobSearchState(updatedArray);            
        } catch (error) {
            alert(error.message)
        }
    }

    async function handleDelete (searchId) {
        //console.log('delete requested')

        const requestOptions = {
            method: "DELETE",
            headers: {
                'Authorization':  'Bearer ' + getToken() }
        };
        fetch(BASE_URL + '/deletesearch/' + searchId, requestOptions)
            .then(response => response.json())
            .then(data => setJobSearchState(data.jobSearchArray));
        
}

    return(
        <>
            <Row className={styles.pageItems}>
            <div>{props.user.firstName}'s Job Search Page</div>
            </Row>
            <Col>
            <form onSubmit={handleSubmit}>
                <Col>
                
                    <input
                    name="jobKeyword"
                    type="text"
                    size="30"
                    placeholder="Company, Position or Keyword"
                    onChange={handleChange} 
                    />
                </Col>
                <Col>
                    <input
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={handleChange} 
                    />
                </Col>
                <Col>
                    <select
                    name="state1"
                    value={formState.state1}
                    onChange={handleChange}
                    className={styles.dropdown}
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
                </Col>
                <Col>
                    <Button onClick={handleSubmit}>Save Job Search</Button>
                </Col>

            </form>
            </Col>
        <Col>
            <Row>
        {jobSearchState && jobSearchState.length > 0 ? 
            <Table className={styles.searchTable}>
                <thead>
                    <tr><th>Keyword</th><th>City</th><th>State</th><th></th><th></th></tr>
                </thead>
                <tbody>
                {jobSearchState.map((listing, idx) => {
                    return (
                        <SearchRow
                        {...props}
                        jobKeyword={listing.jobKeyword}
                        city={listing.city}
                        state1={listing.state1}
                        searchId={listing._id}
                        key={idx}
                        handleDelete={handleDelete}
                        />
                        )
                    })}
                </tbody>
            </Table>
        : 
        <p>Enter information for a search above and click on the save button</p>}
            </Row>
        </Col>
        </>
    );
}



export default JobSearchPage;