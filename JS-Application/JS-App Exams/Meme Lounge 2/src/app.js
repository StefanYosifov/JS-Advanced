import {page,html,render} from './api/lib.js';
import { catalogView } from './Views/catalog.js';
import { createView } from './Views/create.js';
import { detailsView } from './Views/details.js';
import { editView } from './Views/edit.js';
import { loginView } from './Views/login.js';
import { registerView } from './Views/register.js';

const main=document.getElementById('main');
page(decorate);
page('/',()=>console.log());
page('/login',loginView);
page('/register',registerView);
page('/create',createView);
page('/catalog',catalogView);
page('/details/:id',detailsView);
page('/edit/:id',editView);
page.start();


function decorate(ctx,next){
    ctx.render=renderMain;
    // ctx.updateNav=updateNav;
    next();
}

function renderMain(content){
    render(content,main);
}

