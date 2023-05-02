import page from "../../node_modules/page/page.mjs";
import{catalogView} from"./View/catalog.js";
import{createView} from"./View/create.js";
import{registerView} from"./View/register.js";
import{loginView} from"./View/login.js";
import{detailsView} from"./View/details.js";
import{editView} from"./View/edit.js";
import{furnitureView} from"./View/furniture.js";
import * as api from './View/api/data.js';

page("/",catalogView);
page("/catalog",);
page("/create",createView);
page("/details/:id",detailsView);
page("/edit/:id",editView);
page("/login",loginView);
page("/register",registerView);
page("/logout",()=>console.log('logout'));
page("/furniture",furnitureView);

page.start();


window.api=api;