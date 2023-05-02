import { get, post, put } from "./api.js";

export async function allMemes(){
    const response=await get('/data/memes?sortBy=_createdOn%20desc');
    return response;
}

export async function postMeme(title,description,imageUrl){
    const response=await post('/data/memes',{title,description,imageUrl});
    return response;
}

export async function getMemeById(id){
    const response=await get('/data/memes/'+id);
    return response;
}

export async function editMemeById(id){
    const response=await put('/data/memes/'+id);
    return response;
}