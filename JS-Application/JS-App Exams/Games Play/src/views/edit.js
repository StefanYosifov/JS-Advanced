import { getGameById, updateAGame } from "../api/data.js";
import {page,render,html} from '../api/lib.js';
import { getUserData, hasEmptyFields } from "../api/util.js";


const editTemplate=(game,onSubmit)=>html`
 <section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value="${game.title}">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value="${game.category}">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value="${game.maxLevel}">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="${game.imageUrl}">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary">${game.summary}</textarea>
                    <input class="btn submit" type="submit" value="Edit Game">
                </div>
            </form>
        </section>
`

export async function editView(ctx){
    const id=ctx.params.id;
    const game=await getGameById(id);
    ctx.render(editTemplate(game,onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData=Object.fromEntries(new FormData(event.target));

        if(hasEmptyFields(formData)){
            return;
        }

        const title=formData.title;
        const category=formData.category;
        const maxLevel=formData.maxLevel;
        const image=formData.imageUrl;
        const summary=formData.summary;

        await updateAGame(id,title, category, maxLevel, image, summary);
        ctx.page.redirect('/details/'+id);
    }
}