import {render,html,page} from './api/lib.js';
import { logout } from './api/users.js';
import { getUserData } from './api/util.js';
import { showCatalog } from './Views/catalog.js';
import { showDetails } from './Views/details.js';
import { showHome } from './Views/home.js';

const main=document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click',onLogout);
page(decorate);
page('/',showHome);
page('/catalog',showCatalog);
page('/catalog/:id',showDetails);
page('/edit/:id',()=>console.log('edit'));
page('/create',()=>console.log('create'));
page('/login',()=>console.log('login'));
page('/register',()=>console.log('register'));

page.start();

function decorate(ctx,next){
    ctx.render=renderMain;
    ctx.updateNav=updateNav;

    const user=getUserData();
    if(user){
        ctx.user=user;
    }
    next();
}

function renderMain(content){
    render(content,main);
}
function onLogout(){
    logout();
    page.redirect('/');
}

function updateNav(){

}