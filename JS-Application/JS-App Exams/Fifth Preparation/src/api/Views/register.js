import { html } from "../lib.js";
import { userRegister } from "../userActions.js";

const registerTemplate=(onSubmit)=>html
`
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
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`




export async function registerView(ctx){
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData=new FormData(event.target);

        const email=formData.get('email').trim();
        const confirmPass=formData.get('password');
        const repeatPass=formData.get('confirm-password');
        console.log(confirmPass,repeatPass);

        if(email==''||confirmPass==''||repeatPass==''){
            return alert('Some of the fields are empty');
        }
        if(confirmPass!=repeatPass){
            return alert('Passwords must match');
        }
        await userRegister(email,confirmPass);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}