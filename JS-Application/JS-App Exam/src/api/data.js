import { del, get, post, put } from "./api.js";



export async function getDashboardAlbums(){
    const response=await get('/data/albums?sortBy=_createdOn%20desc');
    return response;
}

export async function getAlbumById(id){
    const response=await get('/data/albums/'+id);
    return response;
}

export async function getLikesByBookId(id){
    const response=await get(`/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
    return response;
}

export async function getLikesByAlbumAndUserId(albumId,userId){
    const response=await get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    return response;
}

export async function postAnAlbum(singer,album, imageUrl, release, label, sales){
    const response=await post('/data/albums',{singer,album, imageUrl, release, label, sales});
    return response;
}

export async function likeAnAlbum(albumId){
    const response=await post('/data/likes/',{albumId})
    return response;
}


export async function updateAnAlbum(id,singer,album, imageUrl, release, label, sales){
    const response=await put(`/data/albums/${id}`,{singer,album, imageUrl, release, label, sales});
    return response;
}

export async function deleteAnAlbumById(id){
    const response=await del('/data/albums/'+id);
    return response;
}

