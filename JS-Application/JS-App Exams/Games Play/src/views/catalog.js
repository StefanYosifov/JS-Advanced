import { getAllGames } from '../api/data.js';
import {html} from '../api/lib.js';
import { hasEmptyFields } from "../api/util.js";



const catalogTemplate=(games)=>html`
 <section id="catalog-page">
            <h1>All Games</h1>
            
           ${games.length==0
            ?html` <h3 class="no-articles">No articles yet</h3>`
            :html`${games.map(catalogCard)}`}
        </section>
`

const catalogCard=(card)=>html`
  <div class="allGames">
                <div class="allGames-info">
                    <img src="${card.imageUrl}">
                    <h6>${card.category}</h6>
                    <h2>${card.title}</h2>
                    <a href="/details/${card._id}" class="details-button">Details</a>
                </div>
            </div>
`

export async function catalogView(ctx){
    const games=await getAllGames();
    ctx.render(catalogTemplate(games));
}