import { del, get, post, put } from "./api.js";



export async function getCarById(id){
    const response=await get('/data/cars/'+id);
    return response;
}

export async function getCatalogCars() {
    const response = await get('/data/cars?sortBy=_createdOn%20desc');
    return response;
}

export async function getMyCars(id){
    const response=await get(`/data/cars?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
    return response;
}

export async function getCarsByQuery(query){
    const response=await get(`/data/cars?where=year%3D${query}`);
    return response;
}

export async function createACar(brand, model,description,year,imageUrl,price) {
    const response = await post('/data/cars/', {brand,model,description,year,imageUrl,price});
    return response;
}

export async function editCar(id,brand, model,description,year,imageUrl,price){
    const response=await put(`/data/cars/${id}`,{brand, model,description,year,imageUrl,price});
    return response;
}

export async function deleteCarById(id){
    const response=await del('/data/cars/'+id);
    return response;
}
