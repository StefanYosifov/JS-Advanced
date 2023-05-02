import { showView } from "./app.js";

const homeSection=document.querySelector('#home-page');

export function homePage(){
    showView(homeSection);
}

async function getMovies(){
    const res=await fetch('http://localhost:3030/data/movies');
    const data=await res.json();

    return data;
}

window.getMovies=getMovies();