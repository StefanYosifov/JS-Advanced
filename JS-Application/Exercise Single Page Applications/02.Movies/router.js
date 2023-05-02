import { login } from "./login.js";
import {register} from "./register.js";
import {homePage as home} from './home.js';

const routes={
    '/':home,
    '/login':login,
    '/logout':logout,
     '/register':register,
}


let navigation=document.getElementsByTagName('nav')[0];

export function nav(){
    navigation.addEventListener('click',(e)=>{
    if(e.target.tagName=='A' && e.target.href){
        e.preventDefault();
        const url=new URL(e.target.href);
        console.log(url.pathname);
       const view=routes[url.pathname];
       if(typeof view=='function'){
            view();
       }
    }
});
}


function logout(){
    alert('logged out');
}