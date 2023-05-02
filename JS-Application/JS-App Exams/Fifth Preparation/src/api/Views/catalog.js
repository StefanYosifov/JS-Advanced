import { render,html } from "../lib.js"
import { getAllGames } from "../dataActions.js"

const catalogTemplate=(data)=>html
`
<section id="catalog-page">
            <h1>All Games</h1>
            ${data.length>0?
            data.map(catalogCard)
            :html`<h3 class="no-articles">No articles yet</h3>`
            }
        </section>
    </div>

`

const catalogCard=(data)=>html
`
<div class="allGames">
<div class="allGames-info">
    <img src="${data.imageUrl}">
    <h6>${data.category}</h6>
    <h2>${data.title}</h2>
    <a href="/details/${data._id}" class="details-button">Details</a>
</div>
</div>
`

export async function catalogView(ctx){
    const catalog= await getAllGames();
    ctx.render(catalogTemplate(catalog));
}