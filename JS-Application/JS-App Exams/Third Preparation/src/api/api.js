import { clearUserData, getUserData } from "../views/util.js";

const host = "http://localhost:3030/";

async function request(url,method, data) {
    const options = {
        method,
        headers: {}
    };

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok != true) {
            if(response.status==403){
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

async function get(url){
    return request(url,'get');
}
async function post(url,data){
    return request(url,'post',data);
}
async function put(url,data){
    return request(url,'post',data);
}
async function del(url,data){
    return request(url,'delete');
}

export{
    get,post,put,del,
}
