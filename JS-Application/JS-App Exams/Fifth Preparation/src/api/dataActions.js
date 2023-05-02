import {get,post,put,del} from './api.js';

export async function getAllGames(){
    const response=await get('/data/games?sortBy=_createdOn%20desc');
    console.log(response);
    return response;
}

export async function getNewGames(){
    const response=await get('/data/games?sortBy=_createdOn%20desc&distinct=category');
    console.log(response);
    return response;
}

export async function getGameDetails(){
    const response=await get('/data/games/:id');
    console.log(response);
    return response;
}

export async function postGame(title,category,maxLevel,imageUrl,summary){
    const response=await post('/data/games',{title,category,maxLevel,imageUrl,summary});
    console.log(response);
    return response;
}