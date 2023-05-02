import { html,render,page } from "../api/lib.js";
import { login } from "../api/userAuth.js";
import { checkEmptyFields } from "../api/util.js";



const loginTemplate=(onsubmit)=>html
`
<section id="login">
<div class="container">
    <form @submit=${onsubmit} id="login-form" action="#" method="post">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr>

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text">

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn" value="Login">
    </form>
    <div class="signin">
        <p>Dont have an account?
            <a href="/register">Sign up</a>.
        </p>
    </div>
</div>
</section>
`

export async function loginView(ctx){
    ctx.render(loginTemplate(onsubmit));

    async function onsubmit(event){
        event.preventDefault();
        const formData=new FormData(event.target);

        const username=formData.get('username');
        const password=formData.get('password');

        if(checkEmptyFields(username,password)){
            return alert('All fields must be filled');
        }
        await login(username,password)
        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}