const host='http://localhost:3030';

async function request(url,options){
    try{
        const response=await fetch(host+url,options);
        if(!response){
            const error=response.json();
            throw new Error(error.message);
        }
        const data=response.json();
        return data;
    }
    catch(err){
        alert(err.message);
        return err;
    }
}


function getOption(method,body){
    const options={
        method,
        headers:{}
    };

    const user=JSON.parse(localStorage.getItem('userData'));
    if(user){
        const token=user.accessToken;
        options.headers['X-Authorization']=token;
    }   

    if(body){
        options.headers['Content-Type']="Application/json";
        options.body=JSON.stringify(body);
    }
    return options;
}


export async function get(url){
    return await request(url,getOption('get'));
}
export async function post(url,data){
    return await request(url,getOption('post',data));
}
export async function put(url,data){
    return request(url,getOption('put',data));
}
export async function del(url){
    return request(url,getOption('delete'));
}



