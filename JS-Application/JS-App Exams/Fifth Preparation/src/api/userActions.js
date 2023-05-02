import {get,post} from './api.js';
import {getUserData,setUserData,clearUserData} from './util.js';

export async function userLogin(email,password){
    const url='/users/login';
    const response=await post(url,{email,password});
    const result = {
        id:response._id,
        email:response.email,
        accessToken:response.accessToken
    };
    setUserData(result);
    return response;
}
export async function userRegister(email,password){
    const url='/users/register';
    const response=await post(url,{email,password});
    const result = {
        id:response._id,
        email:response.email,
        accessToken:response.accessToken
    };
    setUserData(result);
    return response;
}

export function userLogout(){
    const url='/users/logout';
    get(url);
    clearUserData();
}

