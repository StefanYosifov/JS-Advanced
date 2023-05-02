import { html, render, page } from './api/lib.js';
import { getUserData } from './api/util.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { deleteView } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import {loginView} from './views/login.js';
import { logoutView } from './views/logout.js';
import { registerView } from './views/register.js';

const main=document.getElementById('main');

updateNav();
page(decorator);
page('/',homeView);
page('/dashboard', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create',createView);
page('/details/:id',detailsView);
page('/edit/:id',editView);
page('/delete/:id',deleteView);

function updateNav(){
    const userElements=document.querySelector('.user');
    const guestElements=document.querySelector('.guest');
    const user=getUserData();
    if(user){
        userElements.style.display='block';
        guestElements.style.display='none';
    }
    else{
        userElements.style.display='none';
        guestElements.style.display='block';
    }
}

function decorator(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav=updateNav;
    next();
}
function renderMain(context) {
    render(context, main);
}
page.start();
