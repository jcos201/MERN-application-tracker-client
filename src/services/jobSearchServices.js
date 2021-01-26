import { getToken } from './tokenService'
// const BASE_URL = 'http://localhost:3001/users' Development URL
const BASE_URL = 'https://react-job-search-app.herokuapp.com/users'


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
        throw new Error('Something went wrong, please double check the data entered into Job Search form')
    }).then(data => data.jobSearchArray)
    
}

export {
    addSearch
}