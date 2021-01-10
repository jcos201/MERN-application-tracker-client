const BASE_URL = 'http://localhost:3001/users'

function signup () {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        header: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Email already taken');
    }).then(data => console.log(data))
}

function login() {

}

function logout() {

}

function getUser() {

}


export {
    signup,
    login,
    logout,
    getUser,
}