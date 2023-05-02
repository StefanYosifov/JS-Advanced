import { getMemeById } from '../api/data.js';
import {page,html,render} from '../api/lib.js';
import { getUserData } from '../api/util.js';

const detailsTemplate=(meme,isOwner)=>html
`
<section id="meme-details">
            <h1>Meme Title: ${meme.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="${meme.imageUrl}">
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        ${meme.description}
                    </p>

                    ${isOwner==true?html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button class="button danger">Delete</button>`:''}
                    
                    
                </div>
            </div>
        </section>
`

export async function detailsView(ctx){
    const meme=await getMemeById(ctx.params.id);
    console.log(meme);
    const userData=getUserData();
    if(userData==null){
        return ctx.render(detailsTemplate(meme,false));
    }
    meme._ownerId==userData.id
    ?ctx.render(detailsTemplate(meme,true))
    :ctx.render(detailsTemplate(meme,false))

   
}