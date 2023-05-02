import { allMemes } from '../api/data.js';
import {page,html,render} from '../api/lib.js';


const catalogTemplate=(cards)=>html
`
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${cards.length>0?
                  cards.map(catalogCard)
                  :html`<p class="no-memes">No memes in database.</p>`
                }
			</div>
        </section>

`

const catalogCard=(card)=>html
`
<div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${card.title}</p>
                            <img class="meme-image" alt="meme-img" src="${card.imageUrl}">
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${card._id}">Details</a>
                        </div>
                    </div>
                </div>
`
export async function catalogView(ctx){
    const catalog=await allMemes();
    ctx.render(catalogTemplate(catalog));
}