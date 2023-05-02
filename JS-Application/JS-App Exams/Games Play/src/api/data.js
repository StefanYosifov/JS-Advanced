import { del, get, post, put } from "./api.js";

export async function getMostRecentGames() {
    const response = await get('/data/games?sortBy=_createdOn%20desc&distinct=category');
    return response;
}

export async function getAllGames() {
    const response = await get('/data/games?sortBy=_createdOn%20desc');
    return response;
}

export async function getGameById(id){
    const response=await get('/data/games/'+id);
    return response;
}

export async function postAGames(title, category, maxLevel, imageUrl, summary) {
    const response = await post('/data/games', { title, category, maxLevel, imageUrl, summary });
    return response;
}

export async function updateAGame(id,title, category, maxLevel, imageUrl, summary){
    const response=await put(`/data/games/${id}`,{title, category, maxLevel, imageUrl, summary});
    return response;
}

export async function deleteAGame(id){
    const response=await del('/data/games/'+id);
    return response;
}