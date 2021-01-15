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
    }).then (data => console.log(data))
}


export {
    addListing,
}