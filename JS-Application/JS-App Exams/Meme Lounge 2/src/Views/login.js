import {page,html,render} from '../api/lib.js';
import { login } from '../api/users.js';

const loginTemplate=(onLogin)=>html
`
<section id="login">
            <form @submit=${onLogin} id="login-form">
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`

export function loginView(ctx){
    ctx.render(loginTemplate(onLogin));


    async function onLogin(event){
        event.preventDefault();
        const formData=new FormData(event.target);
        const email=formData.get('email')
        const password=formData.get('password');

        if(email==''||password==''){
            return alert('All fields must be filled!');
        }

        await login(email,password);
        ctx.page.redirect('/');
    }
}