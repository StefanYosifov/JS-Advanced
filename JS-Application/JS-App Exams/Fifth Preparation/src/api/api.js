import {getUserData,clearUserData} from './util.js';

const host='http://localhost:3000';

async function request(url, method, data) {
    const options = {
        method,
        headers: {}
    };

    const user = getUserData();
    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application.json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status == 204) {
            return response;
        }

        const data = await response.json();

        if(response.ok == false) {
            if (response.status == 403) {
                clearUserData();
            }
            throw new Error(data.message);
        }

        return data;

    } catch (err) {
        alert(err.message);
        throw err;
    }
}


export async function get(url){
    const response=await request(url,'get')
    return response;
}
export async function post(url,data){
    const response=await request(url,'post',data)
    return response;
}
export async function put(url,data){
    const response=await request(url,'put',data)
    return response;
}
export async function del(){
    return await request('del')
}