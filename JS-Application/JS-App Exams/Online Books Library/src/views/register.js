import { register } from '../api/userAuth.js';
import {page,render,html} from '../api/lib.js';



const registerTemplate=(onRegister)=>html
`
<section id="register-page" class="register">
            <form @submit=${onRegister} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`

export async function registerView(ctx){

    ctx.render(registerTemplate(onRegister));

    async function onRegister(event){
        event.preventDefault();
        const formData=new FormData(event.target);

        const email=formData.get('email');
        const password=formData.get('password');
        const confirmPassword=formData.get('confirm-pass');
        if(email==''||password==''||confirmPassword==''){
            return alert('All fields must be filled!');
        }
        if(password!==confirmPassword){
            return alert('Passwords do not match');
        }
        await register(email,password);
        ctx.updateNav();
        ctx.page.redirect('/dashboard');
    }
}