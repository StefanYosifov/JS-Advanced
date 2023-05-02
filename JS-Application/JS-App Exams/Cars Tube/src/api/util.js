export function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}
export function setUserData(data){
    return sessionStorage.setItem('userData',JSON.stringify(data));
}
export function clearUserData(){
    return sessionStorage.removeItem('userData');
}

export function checkEmptyFields(...fields){
    if(fields.some(el=>el=='')){
        return true;
    }
    return false;
}

export async function doPasswordsMatch(firstPass,secondPass){
    if(firstPass==secondPass){
        return true;
    }
    return false;
}