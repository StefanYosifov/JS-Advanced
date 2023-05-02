import * as api from './api/api.js';
import * as user from './api/userActions.js';
import { render,html,page } from './api/lib.js';
import { homeView } from './Views/home.js';
import { catalogView } from './Views/catalog.js';
import { getUserData } from './api/util.js';
import { loginView } from './Views/login.js';
import { registerView } from './Views/register.js';
import { createView } from './Views/create.js';
import { createAlbum } from './api/dataActions.js';
import { detailsView } from './Views/details.js';
const main=document.getElementById('main-content');
document.getElementsByTagName('a')[6].addEventListener('click',(e)=>{
    user.logout();
    updateNav();
})

updateNav();
page(decorateContext);
page('/',homeView);
page('/catalog',catalogView);
// page('/search',);
page('/login',loginView);
page('/register',registerView);
page('/create',createView);
page('/details/:id',detailsView);





page.start();
function decorateContext(ctx,next){
    ctx.render=renderMain;
    ctx.updateNav=updateNav;
    next();
}
function renderMain(templateResult){
    render(templateResult,main);
}
function updateNav(){
    const data=getUserData();
    console.log(data);
    if(data){
        document.getElementsByTagName('a')[3].style.display='none';
        document.getElementsByTagName('a')[4].style.display='none';
    }
    else{
        document.getElementsByTagName('a')[3].style.display='block';
        document.getElementsByTagName('a')[4].style.display='block';
        document.getElementsByTagName('a')[5].style.display='none';
        document.getElementsByTagName('a')[6].style.display='none';
    }
}


window.api=api;
window.user=user;
window.create=createAlbum;
