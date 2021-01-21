import { getToken } from './tokenService'
const BASE_URL = 'http://localhost:3001/users';


function addSearch (searchInfo) {
    console.log('inside of addSearch');
    console.log(searchInfo)
    return fetch(BASE_URL + '/addSearch', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer ' + getToken()
        },
        body: JSON.stringify(searchInfo)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Data')
    }).then(data => data.jobSearchArray)
    
}

export {
    addSearch
}