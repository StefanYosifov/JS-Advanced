import { html, render, page } from './api/lib.js';
import{logout} from './api/userAuth.js';
import { getUserData } from './api/util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { deleteView } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { myCatalogView } from './views/myCatalog.js';
import { registerView } from './views/register.js';

const main = document.getElementById('site-content');

updateNav();
page(decorator);
page('/',homeView);
page('/catalog', catalogView);
page('/year', () => console.log('year'));
page('/myCatalog', myCatalogView);
page('/create', createView);
page('/logout', logoutView);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/edit/:id',editView );
page('/delete/:id',deleteView );




function updateNav(){
    const profileElement=document.getElementById('profile');
    const guestElement=document.getElementById('guest');

    const user=getUserData();
    console.log(user);
    if(user){
        const welcomeMessageElement=profileElement.children[0];
        welcomeMessageElement.textContent=`Welcome ${user.username}`;

        profileElement.style.display='block';
        guestElement.style.display='none';
    }
    else{
        profileElement.style.display='none';
        guestElement.style.display='block';
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
