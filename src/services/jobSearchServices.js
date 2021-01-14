const BASE_URL = 'http://localhost:3001/users';


function addSearch (searchInfo) {
    return fetch(BASE_URL + '/addSearch', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(searchInfo)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Data')
    }).then(data => console.log(data))
    
}

export {
    addSearch,
}