import {html} from '../api/lib.js';
import { login, register } from "../api/userAuth.js";
import { hasEmptyFields } from "../api/util.js";


const registerTemplate=(onSubmit)=>html`

<section id="register-page" class="content auth">
            <form @submit=${onSubmit} id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`

export async function registerView(ctx){

    ctx.render(registerTemplate(onSubmit));
    async function onSubmit(event){
        event.preventDefault();
        const formData=Object.fromEntries(new FormData(event.target));
        if(hasEmptyFields(formData)){
            return;
        }

        const email=formData.email;
        const password=formData.password;
        const repeatPassword=formData['confirm-password'];

        if(password!==repeatPassword){
            return alert('Passwords do not match!');
        }

        await register(email,password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}