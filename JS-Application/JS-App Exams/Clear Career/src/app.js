import {page,html,render} from './api/lib.js';
import { dashboardView } from './Views/dashboard.js';
import { loginView } from './Views/login.js';
import { registerView } from './Views/register.js';

const main=document.getElementById('main');
page(decoration);
page('/',()=>console.log('home'));
page('/login',loginView);
page('/register',registerView);
page('/dashboard',dashboardView);
page('/create',()=>console.log('create'));


function decoration(ctx,next){
    ctx.render=renderMain;

    next();
}
function renderMain(content){
    render(content,main)
}
page.start();

