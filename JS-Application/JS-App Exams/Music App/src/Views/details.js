import { getAlbum } from "../api/dataActions.js";
import { getUserData } from "../api/util.js";


const detailsTemplate=(data,isOwner)=>html
`
<section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src="${data.imgUrl}">
    </div>
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${data.name}</h1>
            <h3>Artist: ${data.artist}</h3>
            <h4>Genre: ${data.genre}</h4>
            <h4>Price: ${data.price}</h4>
            <h4>Date: ${data.releaseDate}</h4>
            <p>Description: ${data.description}</p>
        </div>
         ${isOwner?html`<div class="actionBtn">
         <a href="/edit/${data._id}" class="edit">Edit</a>
         <a href="" class="remove">Delete</a>
     </div>`:''}
 
    </div>
</div>
</section>

`





export async function detailsView(ctx){
    const album=await getAlbum(ctx.params.id);
    const userData=getUserData();
    const isOwner=userData?._id==album._ownerId;
    ctx.render(detailsTemplate(album,isOwner));
}