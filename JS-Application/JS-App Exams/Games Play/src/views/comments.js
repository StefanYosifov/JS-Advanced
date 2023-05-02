import { postAGames } from "../api/data.js";
import {page,render,html} from '../api/lib.js';
import { hasEmptyFields } from "../api/util.js";



const commentsTemplate=()=>html`
<article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${onSubmit} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
`

export function commentView(ctx,gameId){
    const gameId=ctx.params.id;
    if(ctx.user){
        return commentsTemplate(ctx,gameId);
    }

    async function onSubmit(event){
        
    }
}