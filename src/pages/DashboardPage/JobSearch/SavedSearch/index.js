import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getToken } from '../../../../services/tokenService';

const BASE_URL = 'http://localhost:3001/users';

function SavedSearch(props) {
    let { id } = useParams();

    const [searchListing, setSearchListing] = useState([]);

    useEffect(() => {
        console.log('inside saved search option useEffect');

        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/savedsearches/' + id, requestOptions)
            .then(response => response.json())
            .then(data => setSearchListing(data.searchListing));
        
        
        
    }, []);

    let monKeyword = "q=";
    let monCity = "";

    let inKeyword = "q=";
    let inCity = "&l="
    if(searchListing.jobKeyword) {
        monKeyword += searchListing.jobKeyword.replace(" ", "-");
        inKeyword += searchListing.jobKeyword.replace(" ", "+");
     }

    if(searchListing.city) {
        monCity += "&where=" + searchListing.city.replace(" ", "-");
        inCity += searchListing.city.replace(" ", "+");
     }

    if(searchListing.state1) {
        if(monCity === "") {
            monCity += "&where=" + searchListing.state1;
            inCity += searchListing.state1;
        } else {
            monCity += "__2C-" + searchListing.state1;
            monCity += "%2C+" + searchListing.state1;
        }
     }

     const monsterURL = "https://www.monster.com/jobs/search/?" + monKeyword + monCity;
     const indeedURL = "https://www.indeed.com/jobs?" + inKeyword + inCity;
     
    return(
        <>
        <table>
            <tbody>
                <tr>
                    <th>Keyword:</th><td>{searchListing.jobKeyword}</td>
                </tr>
                <tr>
                    <th>City:</th><td>{searchListing.city}</td>
                </tr>
                <tr>
                    <th>State:</th><td>{searchListing.state1}</td>
                </tr>
            </tbody>
        </table>
        <a href={monsterURL} target="_blank" rel="noreferrer"><button>Use this search on Monster.com</button></a>
        <a href={indeedURL} target="_blank" rel="noreferrer"><button>Use this search on Indeed.com</button></a>
        </>
    )
}


export default SavedSearch;