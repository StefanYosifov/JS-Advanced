function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}

function setUserData(data){
    sessionStorage.setItem('userData',JSON.stringify(data));
}

function clearUserData(){
    return sessionStorage.removeItem('userData');
}

export {
    getUserData,
    setUserData,
    clearUserData
}