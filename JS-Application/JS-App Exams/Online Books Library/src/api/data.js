import { del, get, post, put } from "./api.js";

export async function getAllBooks(){
    const response=await get('/data/books?sortBy=_createdOn%20desc');
    return response;
}

export async function getBookById(id){
    const response=await get('/data/books/'+id);
    return response;
}

export async function getMyBooks(id){
    const response=await get(`/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
    return response;
}

export async function addBook(title,description,imageUrl,type){
    const response=await post('/data/books',{title,description,imageUrl,type});
    return response;
}

export async function updateBook(id,title,description,image,type){
    const response=await put(`/data/books/${id}`,{title,description,image,type});
    return response;
}

export async function deleteById(id){
    const response=await del('/data/books/'+id);
    return response;
}