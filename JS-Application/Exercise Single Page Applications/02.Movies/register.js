import {showView} from "./app.js";
const registerPage=document.getElementById('form-sign-up');

export function register(){
    console.log(registerPage);
    showView(registerPage);
}

const elementFields=document.querySelectorAll('#register-form .form-group');
let[emailElement,passwordElement,repeatPasswordElement]=elementFields;
export async function registerRequest(email,password,repeatPass){
    
}