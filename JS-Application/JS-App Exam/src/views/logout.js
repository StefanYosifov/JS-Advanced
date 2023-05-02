import { logout } from "../api/userAuthorization.js";



export function logoutView(ctx){
    logout();
    ctx.updateNav();
    ctx.page.redirect('/');
}