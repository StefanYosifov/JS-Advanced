import { get, post,put } from "./api.js";


export async function getAllAlbums(){
    const response=await get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
    return response;
}

export async function createAlbum(album){
       const response=await post('/data/albums/',album);
       return response;
}

export async function getAlbum(id){
       const response=await get('/data/albums/'+id);
       return response;
}

export async function editAlbum(id){
    const response=await put('/data/albums/'+id,data);
    return response;
}