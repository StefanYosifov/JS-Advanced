import {render,page,html} from "../imports.js";
import { catalogView } from "./views/catalog.js";
import { homeView } from "./views/home.js";


const main=document.querySelector('main');

page(decoratorText);
page('/',homeView);
page('/memes',catalogView);
page('/memes/:id',()=>console.log('details'));
page('/login',()=>console.log('register'));
page('/register',()=>console.log('login'));
page('/create',()=>console.log('create'));
page('/profile',()=>console.log('profile'));
page('/edit/:id',()=>console.log('edit'));
page.start();


function decoratorText(ctx,next){
    ctx.render=renderMain;
    next();
}

function renderMain(templateResult){
    render(templateResult,main);
}