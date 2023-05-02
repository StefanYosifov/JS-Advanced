import {page,render,html} from './api/lib.js';
import { logout } from './api/userAuth.js';
import { getUserData } from './api/util.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { deleteView } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { myBooksView } from './views/myBooks.js';
import { registerView } from './views/register.js';
const main=document.getElementById('site-content');
const logoutBtn=document.querySelectorAll('#user a')[2].addEventListener('click',onLogout);


updateNav();
page(decorator);
page('/dashboard',dashboardView);
page('/login',loginView);
page('/register',registerView);
page('/myBooks',myBooksView);
page('/create',createView);
page('/logout',()=>console.log('Logout'));
page('/details/:id',detailsView);
page('/edit/:id',editView);
page('/delete/:id',deleteView);
page.start();


function onLogout(){
    logout();
    updateNav();
}


function updateNav(){
    const guest=document.getElementById('guest');
    const user=document.getElementById('user');
    const welcomeMessage=document.querySelector('#user span')
    const isLoggedIn=getUserData();
    console.log(isLoggedIn);
    if(isLoggedIn){
        welcomeMessage.textContent=`Welcome ${isLoggedIn.email}`;
        guest.style.display='none';
        user.style.display='block';
    }
    else{
        guest.style.display='block';
        user.style.display='none';
    }
}


function decorator(ctx,next){
    ctx.render=renderMain;
    ctx.updateNav=updateNav;
    next();
}
function renderMain(context){
    render(context,main);
}
