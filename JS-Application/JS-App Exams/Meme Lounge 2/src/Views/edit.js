import {page,html,render} from '../api/lib.js';
import { getMemeById } from "../api/data.js";


const editTemplate=(data,onSubmit)=>html
`
<section id="edit-meme">
<form @submit=${onSubmit} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${data.title}>
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description" .value=${data.description}>
            </textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value${data.imageUrl}>
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
</section>
`

export async function editView(ctx){
    const meme=await getMemeById(ctx.params.id);
    console.log('Enter');
    ctx.render(editTemplate(meme,onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData=new FormData(event.target);
    }

}