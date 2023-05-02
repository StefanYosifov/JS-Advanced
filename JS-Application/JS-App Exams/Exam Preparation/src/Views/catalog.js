import { getAll } from '../api/data.js';
import {html,render} from '../api/lib.js';

const catalogTemplate=(pet)=>html
`
<section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
               ${pet.length>0?
                pet.map(catalogCard)
                :html`<div>
                <p class="no-pets">No pets in dashboard</p></div>`
            }
            </div>
        </section>
`

const catalogCard=(pet)=>html
`
<div class="animals-board">
<article class="service-img">
    <img class="animal-image-cover" src="${pet.image}">
</article>
<h2 class="name">${pet.name}</h2>
<h3 class="breed">${pet.breed}</h3>
<div class="action">
    <a class="btn" href="/catalog/${pet._id}">Details</a>
</div>
</div>
`

export async function showCatalog(ctx){
    const pets=await getAll();
    ctx.render(catalogTemplate(pets));
}