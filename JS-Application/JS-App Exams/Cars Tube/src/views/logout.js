import { logout } from "../api/userAuth.js";




export function logoutView(ctx){
    logout();
    ctx.updateNav();
    ctx.page.redirect('/');
}