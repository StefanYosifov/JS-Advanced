import { del, post } from "./api.js";
import { clearUserData, setUserData } from "./util.js";


export async function login(email,password){
    const response=await post('/users/login',{email,password});
    console.log(response);
    const token={
        id:response._id,
        email:response.email,
        accessToken:response.accessToken,
    }
    setUserData(token);
    return response;
}

export async function register(email,password){
    const response=await post('/users/register',{email,password});
    console.log(response);
    const token={
        id:response._id,
        email:response.email,
        accessToken:response.accessToken,
    }
    setUserData(token);
    return response;
}

export async function logout(){
    clearUserData();
}