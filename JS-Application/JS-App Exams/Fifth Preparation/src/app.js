import {page,render,html} from './api/lib.js';
import * as api from './api/api.js';
import {userLogin,userRegister,userLogout} from './api/userActions.js';
import * as data from './api/dataActions.js';
import {homeView} from './api/Views/home.js';
import { loginView } from './api/Views/login.js';
import { registerView } from './api/Views/register.js';
import { catalogView } from './api/Views/catalog.js';
import { CreateView } from './api/Views/create.js';
import { getUserData } from './api/util.js';

const main=document.getElementById('main-content');

page(decorateContext);
page('/',homeView);
page('/login',loginView);
page('/register',registerView);
page('/catalog',catalogView);
page('/create',CreateView)
page('/details/:id',()=>console.log(''))
page('/edit/:id',()=>console.log(''))
updateNav();
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
    const userData=getUserData();
    if(userData){
        document.getElementById('guest').style.display='none';
        document.getElementById('user').style.display='block';
    }
    else{
        document.getElementById('guest').style.display='block';
        document.getElementById('user').style.display='none';
    }
}


window.login=userLogin;
window.register=userRegister;
window.logout=userLogin;
window.games=data.getAllGames();
window.new=data.getNewGames();
