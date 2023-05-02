import { get } from "./api.js";


export async function getAllJobOffers(){
    const response=get('/data/offers?sortBy=_createdOn%20desc');
    return response;
}