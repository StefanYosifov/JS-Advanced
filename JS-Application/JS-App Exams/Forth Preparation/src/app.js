import page from '../node_modules/page/page.mjs';
import {html,render} from '../node_modules/lit-html/lit-html.js';
import { renderHome } from './api/views/home.js';



page('/',renderHome);
page('/login',()=> console.log('login'));
page('/games',()=> console.log('games'));
page('/register',()=> console.log('register'));
page('/create',()=> console.log('create'));
page('/details/:id',()=> console.log('details'));
page('/edit/:id',()=> console.log('details'));




page.start();