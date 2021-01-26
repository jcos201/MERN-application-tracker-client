import { updateUserApplications } from './userService'
import { getToken } from './tokenService'

// const BASE_URL = 'http://localhost:3001/users' Development URL
const BASE_URL = 'https://react-job-search-app.herokuapp.com/users'

function addListing (applicationInfo) {
    return fetch(BASE_URL + '/addapplication', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(applicationInfo)
    }).then( response => {
        if(response.ok) return response.json();
        throw new Error ('Bad Application Data');
        
    }).then (data => {
        const applications = JSON.stringify(data.applicationArray);
        updateUserApplications(applications);
    })
};


function getListings(userId) {
    const headers = {
        'Content-Type': 'Application/json'
    }
    return fetch(BASE_URL + '/applications/' + userId, { headers })
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data)));
}

function updateListing(updatedInfo, appId) {
    const requestOptions = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + getToken(), },
        body: JSON.stringify(updatedInfo)
    };

    return fetch(BASE_URL + '/applications/' + appId, requestOptions )
        .then(response => response.json)
        .then(data => console.log(data));
}


export {
    addListing,
    getListings,
    updateListing,
}