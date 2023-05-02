import {get,post,put,del} from '../api/api.js';
import { clearUserData, setUserData } from '../views/util.js';

export async function login(email,password){
    const result=post ('users/login',{email,password});
    const userData={
        id:result._id,
        username:result.userName,
        gender:result.gender,
        email:result.email,
        accessToken:result.accessToken
    };
    setUserData(userData);
    return result;
}
export async function register(username,email,password,gender){
    const result=post ('users/register',{username,email,password,gender});
    const userData={
        id:result._id,
        username:result.userName,
        gender:result.gender,
        email:result.email,
        accessToken:result.accessToken
    };
    setUserData(userData);
    return result;
}
export async function logout(){
    const result=get('users/logout');
    clearUserData();
}