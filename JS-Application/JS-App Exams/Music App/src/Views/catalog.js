import {page,render,html} from '../api/lib.js';
import {getAllAlbums} from '../api/dataActions.js';


const catalogTemplate=(data)=> html
`
<section id="catalogPage">
            <h1>All Albums</h1>

            ${data.length>0?
            data.map(catalogCard)
            :html` <p>No Albums in Catalog!</p>`
            }

        </section>

`
   

const catalogCard=(data,owner)=>html
`
<div class="card-box">
                <img src="${data.imgUrl}">
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${data.name}</p>
                        <p class="artist">Artist: ${data.artist}</p>
                        <p class="genre">Genre: ${data.genre}</p>
                        <p class="price">Price: ${data.price}</p>
                        <p class="date">Release Date: ${data.releaseDate}</p>
                    </div>
                    <div class="btn-group">
                        <a href="/details/:${data._id}" id="details">Details</a>
                    </div>
                </div>
            </div>
`


export async function catalogView(ctx){
    const albums=await getAllAlbums();
    ctx.render(catalogTemplate(albums));
}