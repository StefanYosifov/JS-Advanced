import { html } from "../lib.js";
import { userLogin } from "../userActions.js";

const loginTemplate=(onSubmit)=>html
`
<section id="login-page" class="auth">
            <form @submit=${onSubmit} id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`




export async function loginView(ctx){
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData=new FormData(event.target);
        const email=formData.get('email').trim();
        const password=formData.get('password').trim();
        console.log(`${email} ${password}`);

        if(email==''||password==''){
            return alert('All fields are required');
        }

        await userLogin(email,password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}

