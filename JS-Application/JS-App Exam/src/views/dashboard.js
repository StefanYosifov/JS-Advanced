import { getDashboardAlbums } from '../api/data.js';
import {html} from '../api/lib.js';
import { hasEmptyFields } from '../api/util.js';


const dashboardTemplate=(album)=>html`
 <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
          
          
          ${album.length==0
          ?html`<h2>There are no albums added yet.</h2>`
          :html`${album.map(dashboardCard)}`}
        </ul>

       
        
      </section>
`


const dashboardCard=(card)=>html`
<li class="card">
            <img src="${card.imageUrl}" alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${card.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${card.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${card.sales}</span></p>
            <a class="details-btn" href="/details/${card._id}">Details</a>
          </li>
`


export async function dashboardView(ctx){
    const album=await getDashboardAlbums();
    ctx.render(dashboardTemplate(album));
}