export function getUserData(){
    const data=JSON.parse(sessionStorage.getItem('userData'));
    return data;
}
export function setUserData(data){
    return sessionStorage.setItem('userData',JSON.stringify(data));
}
export function clearUserData(){
    return sessionStorage.removeItem('userData');
}
export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault();
        const formData=new FormData(event.target);
        const data=Object.entries(formData);

        callback(data);
    }

}