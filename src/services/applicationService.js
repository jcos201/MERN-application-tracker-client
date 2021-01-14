const BASE_URL = 'http://localhost:3001/users';

function showApplications (user) {
    return fetch(BASE_URL + '/my-applications', {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    })
}

export {
    showApplications,
}