import { get, post } from "./api.js";
import { clearUserData, setUserData } from "./util.js";

export async function login(username,password){
    const response=await post('/users/login',{username,password});
    const user={
        id:response._id,
        username:response.username,
        accessToken:response.accessToken,
    }
    setUserData(user);
    return response;
}
export async function register(username,password){
    const response=await post('/users/register',{username,password});
    const user={
        id:response._id,
        username:response.username,
        accessToken:response.accessToken,
    }
    setUserData(user);
    return response;
}
export async function logout(){
    get('/users/logout');
    clearUserData();
}