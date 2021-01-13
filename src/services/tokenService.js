function setToken(token) {
    if(token) {
        localStorage.setItem('token', token);
    } else {
        removeToken();
    }
}

function removeToken() {
    localStorage.removeItem('token');
}

function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

function getToken() {
    const token = localStorage.getItem('token');
    if(token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if(payload.exp < Date.now() / 1000) {
            removeToken();
            token = null;
        }
    }
    return token;
};

export {
    setToken,
    removeToken,
    getUserFromToken,
    getToken,
}