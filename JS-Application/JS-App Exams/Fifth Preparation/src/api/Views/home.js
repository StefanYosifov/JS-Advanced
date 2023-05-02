import { html } from "../lib.js";
import {getNewGames} from "../dataActions.js";

const homeTemplate=(home)=>html
`
<div id="home-page">
                <h1>Latest Games</h1>
                ${home.length>0?
                    home.map(homeCard)
                    :html`<p class="no-articles">No games yet</p>`}
            </div>
        </section>

`

const homeCard = (data) => html
`

<div class="game">
                    <div class="image-wrap">
                        <img src="${data.imageUrl}">
                    </div>
                    <h3>${data.title}</h3>
                    <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div class="data-buttons">
                        <a href="/details/${data._id}" class="btn details-btn">Details</a>
                    </div>
                </div>
`

export async function homeView(ctx){
    const games=await getNewGames();
    ctx.render(homeTemplate(games));
}