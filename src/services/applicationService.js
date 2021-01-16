import { updateUserApplications } from './userService'
const BASE_URL = 'http://localhost:3001/users';

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
        console.log('data coming back from express');
        console.log(JSON.stringify(data.applicationArray));
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


export {
    addListing,
    getListings
}